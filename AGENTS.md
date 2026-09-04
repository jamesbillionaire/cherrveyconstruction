<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cherrvey Codex delivery

Work only in `C:\CherrveyLocal`. Before a substantial task, verify the current branch, `origin` state, local commits ahead/behind, and dirty/untracked work; inspect the relevant implementation before editing. Read [`CHATGPT.md`](CHATGPT.md) when the task requires ChatGPT authority, Terra selection, or post-implementation review.

Preserve unrelated work. One implementation writer works in the checkout at a time. Do not create worktrees, clones, alternate checkouts, automatic stashes, resets, cleans, or destructive convenience workarounds. Use focused validation appropriate to the changed risk; do not weaken tests for a pass or run broad validation merely for a policy-only change.

Do not deploy, release, tag, or push a production-affecting change without James's explicit authorization. Keep secrets out of output and commits, use James's configured Git identity, and do not add bot/co-author trailers. ChatGPT is the mandatory reviewer after every delegated Codex implementation.
