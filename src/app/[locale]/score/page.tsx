import ScoreQuiz from '@/components/quiz/ScoreQuiz';

type Props = { params: Promise<{ locale: 'fr' | 'en' }> };

export default async function ScorePage({ params }: Props) {
  const { locale } = await params;
  return <ScoreQuiz locale={locale} />;
}
