# The Agent's Uh-Oh

[![make.fun · u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/zeroknowledge0x/agents-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/zeroknowledge0x/agents-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![License: MIT](https://img.shields.io/badge/License-MIT-2E8B57.svg)](https://opensource.org/licenses/MIT)

One word an agent says when it has no idea what to do. Nothing attached.

## Files

- `main.ts` - writes the single word to `/output/entry.txt` using only the Node
  standard library. Deterministic: no clock, no random source, no network.
- `LICENSE` - MIT.

## Rebuild and check locally

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out /opt/data/node22/bin/node --experimental-strip-types main.ts
sha256sum out/entry.txt
```

The grader runs `main.ts` twice into fresh output directories and requires
byte-identical text of 1-99 characters. The guard in `main.ts` enforces that
range so an edit can never push the word out of the gate. MIT licensed. The
word is original work for this entry.
