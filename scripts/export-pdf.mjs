/**
 * MB SYSTÈME — PDF Export Script
 * Usage: npm run export:pdf
 * Generates premium branded PDFs from /content/fr/*.md into /public/downloads/
 *
 * MB Système does not promise quick wealth. Results depend on commitment and execution.
 */

import PDFDocument from 'pdfkit';
import { marked } from 'marked';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ─── Brand Colors ─────────────────────────────────────────────────────────
const COLORS = {
  background: '#050505',
  gold: '#C9A45C',
  goldLight: '#E8D8B0',
  cream: '#F5F1E8',
  muted: '#A8A29A',
  border: '#2A2418',
  card: '#11100D',
};

// ─── Resource → Markdown file mapping ─────────────────────────────────────
const RESOURCES = [
  { id: 'mb-starter-guide',              mdFile: 'mb-starter-guide',              tier: 'starter', title: 'MB Starter Guide',                 subtitle: 'Pose les fondations de ton système',              type: 'Guide' },
  { id: '30-regles-millionaire-behavior', mdFile: '30-regles-millionaire-behavior', tier: 'starter', title: '30 Règles Millionaire Behavior',    subtitle: 'Les comportements des bâtisseurs',                type: 'Cartes' },
  { id: 'mb-systeme-manuel',             mdFile: 'manuel-mb-systeme',             tier: 'core',    title: 'MB SYSTÈME — Le Manuel',            subtitle: 'Construis ton potentiel comme un actif',          type: 'Manuel' },
  { id: 'mb-workbook',                   mdFile: 'mb-workbook',                   tier: 'core',    title: 'MB Workbook',                       subtitle: 'Clarifier. Structurer. Construire.',               type: 'Workbook' },
  { id: '100-money-moves',               mdFile: '100-money-moves',               tier: 'core',    title: '100 Money Moves',                   subtitle: 'Idées propres pour créer de la valeur',           type: 'Bibliothèque' },
  { id: 'mb-sales-scripts',              mdFile: 'sales-scripts',                 tier: 'core',    title: 'MB Sales Scripts',                  subtitle: 'Vendre sans forcer',                              type: 'Scripts' },
  { id: 'prompts-ia-mb',                 mdFile: 'prompts-ia-mb',                 tier: 'pro',     title: 'Prompts IA MB',                     subtitle: 'Créer plus vite, penser plus clair',              type: 'Prompts' },
  { id: 'calendrier-contenu',            mdFile: 'hooks',                         tier: 'pro',     title: 'Calendrier Contenu — 60 Hooks',     subtitle: '30 jours pour publier avec système',              type: 'Calendrier' },
  { id: 'generateur-offre',              mdFile: 'checklist-potentiel-monetisable', tier: 'pro',   title: "Générateur d'Offre",                subtitle: 'Transformer une idée en offre vendable',          type: 'Template' },
  { id: 'kit-internationalisation',      mdFile: 'kit-internationalisation',      tier: 'pro',     title: 'Kit Internationalisation',           subtitle: 'FR / EN — vendre plus loin',                      type: 'Kit' },
];

const TIER_LABELS = { starter: 'STARTER', core: 'CORE', pro: 'PRO' };
const OUTPUT_DIR = path.join(ROOT, 'public/downloads');
const CONTENT_DIR = path.join(ROOT, 'content/fr');

// ─── Page dimensions ───────────────────────────────────────────────────────
const PAGE_WIDTH = 595.28;  // A4 width in points
const PAGE_HEIGHT = 841.89; // A4 height in points
const MARGIN = 56;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

// ─── Markdown parser (extract text blocks from .md) ────────────────────────
function parseMarkdown(mdContent) {
  const tokens = marked.lexer(mdContent);
  return tokens;
}

function stripMarkdown(text) {
  if (typeof text !== 'string') return String(text ?? '');
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/^#+\s+/, '');
}

// ─── PDF Generator ─────────────────────────────────────────────────────────
async function generatePDF(resource) {
  const mdPath = path.join(CONTENT_DIR, `${resource.mdFile}.md`);

  if (!fs.existsSync(mdPath)) {
    console.warn(`  ⚠ Markdown not found: ${resource.mdFile}.md — skipping`);
    return;
  }

  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const tokens = parseMarkdown(mdContent);
  const outputPath = path.join(OUTPUT_DIR, `${resource.id}.pdf`);

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
    info: {
      Title: resource.title,
      Author: 'MB SYSTÈME',
      Subject: resource.subtitle,
      Creator: 'MB SYSTÈME — Millionaire Behavior System',
      Keywords: 'MB Système, comportements, système, argent, offre',
    },
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  let pageNumber = 1;

  // ── Footer helper ──────────────────────────────────────────────────────
  const drawFooter = () => {
    const y = PAGE_HEIGHT - MARGIN + 10;
    // Gold line
    doc.moveTo(MARGIN, y - 8).lineTo(PAGE_WIDTH - MARGIN, y - 8)
       .strokeColor(COLORS.border).lineWidth(0.5).stroke();
    // Left: MB SYSTÈME
    doc.fontSize(7).fillColor(COLORS.muted)
       .text('MB SYSTÈME — Millionaire Behavior System', MARGIN, y, { width: 250 });
    // Right: page number
    doc.fontSize(7).fillColor(COLORS.muted)
       .text(`${pageNumber}`, PAGE_WIDTH - MARGIN - 30, y, { width: 30, align: 'right' });
    // Disclaimer
    doc.fontSize(6).fillColor(COLORS.border)
       .text('MB Système ne promet pas de richesse rapide. Les résultats dépendent de ton exécution.', MARGIN, y + 10, { width: CONTENT_WIDTH });
  };

  // ── Cover page ─────────────────────────────────────────────────────────
  // Dark background
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(COLORS.background);

  // Top gold bar
  doc.rect(0, 0, PAGE_WIDTH, 4).fill(COLORS.gold);

  // Tier badge
  const tierBadge = TIER_LABELS[resource.tier];
  doc.rect(MARGIN, 80, 60, 18).fill(COLORS.border);
  doc.fontSize(7).fillColor(COLORS.gold)
     .text(tierBadge, MARGIN + 4, 86, { width: 52, align: 'center' });

  // MB SYSTÈME label
  doc.fontSize(9).fillColor(COLORS.gold)
     .text('MB SYSTÈME', MARGIN, 120, { characterSpacing: 3 });

  // Title
  doc.fontSize(32).fillColor(COLORS.cream).font('Helvetica-Bold')
     .text(resource.title, MARGIN, 150, { width: CONTENT_WIDTH, lineGap: 6 });

  // Subtitle
  doc.moveDown(0.5)
     .fontSize(13).fillColor(COLORS.muted).font('Helvetica')
     .text(resource.subtitle, MARGIN, doc.y, { width: CONTENT_WIDTH });

  // Type badge
  doc.moveDown(1.5);
  doc.rect(MARGIN, doc.y, 80, 22).stroke(COLORS.gold).lineWidth(0.5);
  doc.fontSize(8).fillColor(COLORS.gold)
     .text(resource.type.toUpperCase(), MARGIN, doc.y - 18, { width: 80, align: 'center', characterSpacing: 2 });

  // Gold divider
  doc.moveTo(MARGIN, 360).lineTo(MARGIN + 60, 360)
     .strokeColor(COLORS.gold).lineWidth(1).stroke();

  // Tagline
  doc.fontSize(11).fillColor(COLORS.goldLight).font('Helvetica-Oblique')
     .text('"Construis-toi comme un actif."', MARGIN, 380, { width: CONTENT_WIDTH });
  doc.fontSize(8).fillColor(COLORS.muted).font('Helvetica')
     .text('MB SYSTÈME — Millionaire Behavior System', MARGIN, 400, { width: CONTENT_WIDTH });

  // Bottom brand bar
  doc.rect(0, PAGE_HEIGHT - 50, PAGE_WIDTH, 50).fill(COLORS.card);
  doc.moveTo(0, PAGE_HEIGHT - 50).lineTo(PAGE_WIDTH, PAGE_HEIGHT - 50)
     .strokeColor(COLORS.border).lineWidth(0.5).stroke();
  doc.fontSize(8).fillColor(COLORS.muted)
     .text('mbsysteme.com  ·  Accès à vie  ·  Sans abonnement', MARGIN, PAGE_HEIGHT - 30, {
       width: CONTENT_WIDTH, align: 'center',
     });

  // ── Content pages ──────────────────────────────────────────────────────
  doc.addPage();
  pageNumber++;
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(COLORS.background);

  let y = MARGIN;

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_HEIGHT - MARGIN - 40) {
      drawFooter();
      doc.addPage();
      pageNumber++;
      doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(COLORS.background);
      // Top micro bar
      doc.rect(0, 0, PAGE_WIDTH, 2).fill(COLORS.border);
      y = MARGIN;
    }
  };

  for (const token of tokens) {
    switch (token.type) {
      case 'heading': {
        const text = stripMarkdown(token.text);
        if (token.depth === 1) {
          ensureSpace(80);
          // Gold accent line before H1
          doc.moveTo(MARGIN, y).lineTo(MARGIN + 40, y)
             .strokeColor(COLORS.gold).lineWidth(1.5).stroke();
          y += 10;
          doc.fontSize(20).fillColor(COLORS.cream).font('Helvetica-Bold')
             .text(text, MARGIN, y, { width: CONTENT_WIDTH });
          y = doc.y + 16;
          // Underline
          doc.moveTo(MARGIN, y - 8).lineTo(PAGE_WIDTH - MARGIN, y - 8)
             .strokeColor(COLORS.border).lineWidth(0.5).stroke();
          y += 8;
        } else if (token.depth === 2) {
          ensureSpace(50);
          doc.fontSize(14).fillColor(COLORS.gold).font('Helvetica-Bold')
             .text(text, MARGIN, y, { width: CONTENT_WIDTH });
          y = doc.y + 10;
        } else if (token.depth === 3) {
          ensureSpace(35);
          doc.fontSize(11).fillColor(COLORS.goldLight).font('Helvetica-Bold')
             .text(text, MARGIN, y, { width: CONTENT_WIDTH });
          y = doc.y + 8;
        } else {
          ensureSpace(25);
          doc.fontSize(10).fillColor(COLORS.cream).font('Helvetica-Bold')
             .text(text, MARGIN, y, { width: CONTENT_WIDTH });
          y = doc.y + 6;
        }
        break;
      }

      case 'paragraph': {
        const text = stripMarkdown(token.text);
        if (!text.trim()) break;
        ensureSpace(30);
        doc.fontSize(10).fillColor(COLORS.muted).font('Helvetica')
           .text(text, MARGIN, y, { width: CONTENT_WIDTH, lineGap: 3 });
        y = doc.y + 10;
        break;
      }

      case 'list': {
        for (const item of token.items) {
          const text = stripMarkdown(item.text || (item.tokens?.[0]?.text ?? ''));
          if (!text.trim()) continue;
          ensureSpace(20);
          // Gold bullet
          doc.fontSize(10).fillColor(COLORS.gold).text('→', MARGIN, y, { width: 16, continued: false });
          doc.fontSize(10).fillColor(COLORS.cream).font('Helvetica')
             .text(text, MARGIN + 20, y, { width: CONTENT_WIDTH - 20, lineGap: 2 });
          y = doc.y + 6;
        }
        y += 4;
        break;
      }

      case 'blockquote': {
        const text = stripMarkdown(token.text || (token.tokens?.[0]?.text ?? ''));
        if (!text.trim()) break;
        ensureSpace(50);
        // Gold left border
        doc.rect(MARGIN, y, 3, 40).fill(COLORS.gold);
        doc.fontSize(10).fillColor(COLORS.goldLight).font('Helvetica-Oblique')
           .text(text, MARGIN + 14, y + 4, { width: CONTENT_WIDTH - 14, lineGap: 3 });
        y = doc.y + 14;
        break;
      }

      case 'hr': {
        ensureSpace(20);
        doc.moveTo(MARGIN, y + 4).lineTo(PAGE_WIDTH - MARGIN, y + 4)
           .strokeColor(COLORS.border).lineWidth(0.5).stroke();
        y += 18;
        break;
      }

      case 'space': {
        y += 8;
        break;
      }

      case 'table': {
        // Simplified table rendering
        ensureSpace(40);
        if (token.header) {
          const colWidth = CONTENT_WIDTH / Math.max(token.header.length, 1);
          // Header row
          doc.rect(MARGIN, y, CONTENT_WIDTH, 20).fill(COLORS.card);
          token.header.forEach((cell, i) => {
            const cellText = stripMarkdown(cell.text || cell);
            doc.fontSize(8).fillColor(COLORS.gold).font('Helvetica-Bold')
               .text(cellText, MARGIN + i * colWidth + 4, y + 6, { width: colWidth - 8 });
          });
          y += 22;
          // Body rows
          for (const row of (token.rows || [])) {
            ensureSpace(18);
            row.forEach((cell, i) => {
              const cellText = stripMarkdown(cell.text || cell);
              doc.fontSize(8).fillColor(COLORS.muted).font('Helvetica')
                 .text(cellText, MARGIN + i * colWidth + 4, y + 4, { width: colWidth - 8 });
            });
            y += 18;
            doc.moveTo(MARGIN, y).lineTo(PAGE_WIDTH - MARGIN, y)
               .strokeColor(COLORS.border).lineWidth(0.3).stroke();
          }
          y += 10;
        }
        break;
      }

      default:
        break;
    }
  }

  // Draw footer on last page
  drawFooter();

  // ── Back cover ─────────────────────────────────────────────────────────
  doc.addPage();
  doc.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT).fill(COLORS.background);
  doc.rect(0, PAGE_HEIGHT - 4, PAGE_WIDTH, 4).fill(COLORS.gold);

  doc.fontSize(9).fillColor(COLORS.gold)
     .text('MB SYSTÈME', PAGE_WIDTH / 2 - 40, PAGE_HEIGHT / 2 - 60, { width: 80, align: 'center', characterSpacing: 3 });
  doc.fontSize(24).fillColor(COLORS.cream).font('Helvetica-Bold')
     .text('Construis-toi', PAGE_WIDTH / 2 - 120, PAGE_HEIGHT / 2 - 30, { width: 240, align: 'center' });
  doc.fontSize(24).fillColor(COLORS.gold).font('Helvetica-Bold')
     .text('comme un actif.', PAGE_WIDTH / 2 - 120, PAGE_HEIGHT / 2 + 10, { width: 240, align: 'center' });

  doc.moveTo(PAGE_WIDTH / 2 - 20, PAGE_HEIGHT / 2 + 60).lineTo(PAGE_WIDTH / 2 + 20, PAGE_HEIGHT / 2 + 60)
     .strokeColor(COLORS.gold).lineWidth(1).stroke();

  doc.fontSize(8).fillColor(COLORS.muted)
     .text('MB Système ne promet pas de richesse rapide.', MARGIN, PAGE_HEIGHT / 2 + 80, { width: CONTENT_WIDTH, align: 'center' });
  doc.fontSize(8).fillColor(COLORS.muted)
     .text('Il t\'aide à adopter les comportements des bâtisseurs.', MARGIN, PAGE_HEIGHT / 2 + 94, { width: CONTENT_WIDTH, align: 'center' });

  doc.end();

  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });

  console.log(`  ✓ ${resource.id}.pdf`);
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🖤 MB SYSTÈME — PDF Export\n');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  for (const resource of RESOURCES) {
    process.stdout.write(`Generating ${resource.tier.toUpperCase()} / ${resource.title}... `);
    try {
      await generatePDF(resource);
    } catch (err) {
      console.error(`✗ Error: ${err.message}`);
    }
  }

  console.log(`\n✅ Done — PDFs saved to /public/downloads/\n`);
  console.log('─'.repeat(50));
  console.log('MB Système ne promet pas de revenus garantis.');
  console.log('Les résultats dépendent de l\'exécution.\n');
}

main().catch(console.error);
