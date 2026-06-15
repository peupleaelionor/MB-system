import { NextRequest, NextResponse } from 'next/server';
import { stripe, PRODUCTS, ProductKey } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { product } = body as { product: ProductKey };

    if (!product || !PRODUCTS[product]) {
      return NextResponse.json({ error: 'Produit invalide' }, { status: 400 });
    }

    const productData = PRODUCTS[product];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: productData.name,
              description: productData.description,
            },
            unit_amount: productData.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/access?product=${product}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: {
        product,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    );
  }
}
