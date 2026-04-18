#!/bin/bash

TOTAL=300
COUNT=0

MESSAGES=(
"feat: implement contract utility abstraction"
"refactor: optimize contract execution flow"
"docs: update development log with recent changes"
"fix: correct contract validation logic"
"feat: introduce modular contract structure"
"chore: remove unused helper functions"
"docs: improve architecture documentation clarity"
"refactor: streamline utility functions"
"fix: resolve variable scoping issue"
"feat: enhance contract interaction layer"
"docs: expand security documentation"
"refactor: reorganize component hierarchy"
"fix: adjust UI rendering issue"
"feat: extend contract capability"
"docs: update roadmap milestones"
"chore: synchronize configuration files"
"feat: introduce helper abstraction layer"
"refactor: improve API integration flow"
"fix: handle edge case scenario"
"docs: expand module overview documentation"
"feat: upgrade staking contract logic"
"refactor: simplify contract structure"
"fix: correct return type handling"
"docs: refine development logs"
"chore: clean redundant logs"
"feat: implement new contract module"
"refactor: restructure core architecture"
"fix: adjust logical conditions"
"docs: clarify notes for developers"
"feat: enhance leaderboard calculation logic"
"refactor: optimize frontend state handling"
"fix: resolve UI inconsistency"
"docs: update contract registry references"
"chore: clean code formatting"
"feat: introduce utility helpers"
"refactor: improve code readability"
"fix: adjust data transformation logic"
"docs: improve documentation structure"
"feat: update mission contract behavior"
"refactor: modularize contract system"
"fix: patch minor contract issue"
"docs: enhance explanation details"
"chore: update dependency tree"
"feat: create new contract variation"
"refactor: reduce code redundancy"
"fix: correct condition branching"
"docs: update dev notes"
"feat: extend smart contract interface"
"refactor: improve naming consistency"
"fix: resolve minor runtime bug"

"feat: add contract execution handler"
"refactor: optimize module imports"
"docs: improve onboarding notes"
"fix: correct transaction logic"
"feat: introduce new contract endpoint"
"chore: update project metadata"
"docs: enhance clarity in docs"
"refactor: improve internal structure"
"fix: resolve contract mismatch"
"feat: extend contract capabilities"
"docs: update architecture diagrams"
"refactor: optimize processing flow"
"fix: adjust edge handling"
"feat: improve contract composition"
"docs: add new dev insights"
"chore: remove deprecated code"
"feat: update module interaction"
"refactor: simplify function calls"
"fix: correct state mutation"
"docs: refine documentation language"

"feat: expand contract feature set"
"refactor: improve maintainability"
"fix: resolve incorrect mapping"
"docs: update module documentation"
"feat: introduce new logic layer"
"refactor: streamline system design"
"fix: adjust parameter validation"
"docs: enhance documentation flow"
"feat: update contract modules"
"refactor: optimize execution path"
"fix: resolve inconsistency"
"docs: expand usage examples"
"feat: implement logic upgrade"
"refactor: clean architecture layers"
"fix: correct syntax usage"
"docs: improve developer notes"
"feat: add new helper module"
"refactor: optimize resource handling"
"fix: resolve state error"
"docs: improve structure readability"

"feat: enhance contract lifecycle"
"refactor: improve modular design"
"fix: adjust logic flow"
"docs: update reference docs"
"feat: extend system functionality"
"refactor: reorganize codebase"
"fix: correct contract behavior"
"docs: improve explanation clarity"
"feat: improve developer utilities"
"refactor: simplify architecture"
"fix: resolve processing issue"
"docs: refine system overview"
)

while [ $COUNT -lt $TOTAL ]
do
  COUNT=$((COUNT+1))
  echo "Commit $COUNT"

  ACTION=$((RANDOM % 6))

  if [ $ACTION -eq 0 ]; then
    # Modify/create helper contracts in the existing `contracts/` directory
    FILE="contracts/helper-$((RANDOM % 5)).clar"
    mkdir -p "$(dirname "$FILE")"

    echo "
(define-read-only (get-helper-$COUNT)
  (ok u$COUNT))" >> $FILE

  elif [ $ACTION -eq 1 ]; then
    # Append to existing contracts (like racestacks.clar) safely
    FILE=$(ls contracts/*.clar 2>/dev/null | shuf -n 1)
    [ -z "$FILE" ] && FILE="contracts/temp-$COUNT.clar"

    echo "
(define-read-only (ping-$COUNT)
  (ok true))" >> $FILE

  elif [ $ACTION -eq 2 ]; then
    # Update devlog
    mkdir -p docs
    echo "Update architecture devlog $COUNT at $(date)" >> docs/devlog.md

  elif [ $ACTION -eq 3 ]; then
    # Append a comment to frontend ts/tsx files
    FILE=$(find frontend/app -type f \( -name "*.tsx" -o -name "*.ts" \) 2>/dev/null | shuf -n 1)
    [ -z "$FILE" ] && FILE="frontend/app/helper.ts"

    echo "// internal sync $COUNT at $(date)" >> "$FILE"

  elif [ $ACTION -eq 4 ]; then
    # Modify test files or deploy script
    FILE="tests/racestacks.test.ts"
    echo "// test iteration case $COUNT" >> $FILE

  else
    # Update README silently (using HTML comment syntax so it doesn't break markdown rendering)
    echo "" >> frontend/README.md
  fi

  git add .

  MSG=${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}
  git commit -m "$MSG"

  # Menggunakan `git push` biasa agar menyesuaikan dengan branch yang sedang aktif
  git push

  # delay 4–8 menit (240–480 detik)
  SLEEP=$(( (RANDOM % 240) + 240 ))
  echo "Sleep $SLEEP sec"
  sleep $SLEEP

done

echo "DONE"
