import { redirect } from 'next/navigation';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function PricingRedirect({ params }: Props) {
  const { locale } = await params;
  redirect(locale === 'en' ? '/en/offres' : '/offres');
}
