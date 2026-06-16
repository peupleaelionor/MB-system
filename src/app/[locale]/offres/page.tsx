import OffresPage from '@/components/pricing/OffresPage';
import { ResourceLibrary } from '@/components/home/ResourceLibrary';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function Offres({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      <OffresPage locale={locale} />
      <ResourceLibrary locale={locale} />
    </>
  );
}
