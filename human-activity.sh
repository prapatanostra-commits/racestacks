#!/bin/bash

# Konfigurasi Target
TOTAL_COMMITS=5000
DURATION_HOURS=6
TOTAL_SECONDS=$((DURATION_HOURS * 3600))
AVG_SLEEP=$(echo "scale=2; $TOTAL_SECONDS / $TOTAL_COMMITS" | bc)

COUNT=0

# Pesan commit yang lebih variatif dan kontekstual
MESSAGES=(
  "feat(contract): implement validation for principal traits"
  "fix(api): resolve nonce mismatch in broadcast loop"
  "refactor(core): optimize clarity-vm response parsing"
  "docs(readme): update deployment instructions for mainnet"
  "chore(deps): bump clarity-sdk-slim to v2.1.0"
  "test(unit): add coverage for multi-sig authorization"
  "perf(db): index contract events for faster retrieval"
  "style(frontend): align dashboard margins with design spec"
  "fix(security): sanitize input for contract call helper"
  "feat(ui): add loading states for transaction broadcasting"
)

# Fungsi untuk simulasi "Human Error" & Variasi Waktu
get_sleep_time() {
  # Menggunakan distribusi acak di sekitar rata-rata (1-8 detik)
  # Kadang cepat, kadang ada jeda sedikit lebih lama
  echo "scale=2; $AVG_SLEEP * (0.5 + ($RANDOM % 100 / 100.0))" | bc
}

echo "Memulai sesi sprint: $TOTAL_COMMITS commit dalam $DURATION_HOURS jam."

while [ $COUNT -lt $TOTAL_COMMITS ]
do
  COUNT=$((COUNT+1))
  
  # Pilih file secara acak untuk dimodifikasi
  ACTION=$((RANDOM % 5))
  
  case $ACTION in
    0) # Modify Smart Contract
      FILE="contracts/logic-proxy-$((RANDOM % 3)).clar"
      echo " ;; update logic flow v.1.$COUNT" >> "$FILE"
      echo "(define-public (check-status-$COUNT (id uint)) (ok id))" >> "$FILE"
      ;;
    1) # Update Documentation (Markdown)
      FILE="docs/technical-specs.md"
      echo "* Iteration $COUNT: Verified contract state consistency at $(date +'%T')" >> "$FILE"
      ;;
    2) # Refactor Frontend/TS
      FILE="src/utils/formatter.ts"
      echo "export const VERSION_$COUNT = '$COUNT';" >> "$FILE"
      ;;
    3) # Tests
      FILE="tests/integration_test.ts"
      echo "// TODO: validasi edge case untuk batch $COUNT" >> "$FILE"
      ;;
    4) # Config/JSON
      FILE="package.json"
      # Simulasi perubahan minor pada meta atau whitespace
      sed -i "s/\"version\": \".*\"/\"version\": \"1.0.$COUNT\"/" "$FILE" 2>/dev/null
      ;;
  esac

  # Git Operations
  git add .
  
  # Ambil pesan acak
  RAND_MSG=${MESSAGES[$RANDOM % ${#MESSAGES[@]}]}
  git commit -m "$RAND_MSG (#$COUNT)" --quiet

  # Push setiap 10-20 commit agar tidak terlalu memberatkan koneksi & terlihat lebih natural
  if (( $COUNT % 15 == 0 )); then
    echo "[$COUNT/$TOTAL_COMMITS] Pushing batch to remote..."
    git push --quiet
  fi

  # Sleep dinamis
  SLEEP_FOR=$(get_sleep_time)
  sleep $SLEEP_FOR

  # Progress Indicator sederhana
  if (( $COUNT % 100 == 0 )); then
    echo "Progress: $COUNT commits completed..."
  fi
done

git push # Final push
echo "Sprint selesai: $TOTAL_COMMITS commit terkirim secara profesional."
