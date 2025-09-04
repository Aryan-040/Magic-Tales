import { NextRequest, NextResponse } from 'next/server';
export const runtime = 'nodejs';
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { generateStoryWithGemini } from '@/config/GeminiAi';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      AgeGroup = '',
      StoryType = '',
      SubjectInput = '',
      storySubject = '',
      ImageStyle = '',
      prompt = '',
    } = body || {};

    if (!prompt || !prompt.trim()) {
      return NextResponse.json({ ok: false, error: 'Prompt is empty.' }, { status: 400 });
    }
    const aiOutput = await generateStoryWithGemini(prompt);

    const storyId = randomUUID();

    const rows = await db
      .insert(StoryData)
      .values({
        storyId,
        storySubject: SubjectInput || storySubject,
        StoryType,
        AgeGroup,
        ImageStyle,
        output: { text: aiOutput },
        coverImage: null as unknown as any,
      })
      .returning({ storyId: StoryData.storyId });

    return NextResponse.json({ ok: true, storyId: rows?.[0]?.storyId, text: aiOutput });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}


