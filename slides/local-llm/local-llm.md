---
marp: true
theme: tech
paginate: true
---

<!-- _class: lead -->

![会社ロゴ](../assets/yoshinani-icon_full_500x500.png)

# ローカルLLMを使う

手元の環境で動かす生成 AI

<p class="lead-meta">所属: 株式会社YOSHINANI<br>名前: ふっけ<br>日付: 2025/05/09</p>

---

## アジェンダ

- ローカルLLM（概要と利点）
- Ollama について
- モデルについて
- 導入とモデル取得
- カスタマイズ（Modelfile）
- Raycast（Ollama AI 拡張）
- 活用と注意

---

## ローカルLLMとは

- 自分の PC やオンプレなど、自前環境で重みを動かして推論する LLM
- プロンプトが外部クラウドへ送られない
- オフライン利用ができる
- 必要なVRAM・RAM・ディスク容量はモデル規模や量子化に強く依存する

---

## ローカルの利点

- オフライン利用ができる
- 通信や API キーなく試行できる。レート上限を気にしにくい

---

## Ollama とは

- ローカル LLM 用のランタイムと CLI
- モデルの取得・実行・管理を一貫して扱える

---

## モデルとは

- パラメータ数・量子化で速度と品質のバランスが変わる
- 軽量は速い／大規模は高精度になりやすい
- `ollama pull` で取得し、用途で切り替え可能
- https://ollama.com/search でモデルを探す

| モデル | 容量の目安 | 応答※ | 用途の目安 |
|--------|------------|------|------------|
| `qwen2.5:3b` | 約 1.9 GB | めっちゃ早い | 軽量。品質は限定的、空き確保なら削除可 |
| `qwen2.5:14b` | 約 9 GB | 早い | 日常利用のメイン候補 |
| `qwen2.5:32b` | 約 19〜20 GB | 遅い | 長文・複雑な整理・品質優先 |

※ **計測環境**: MacBook Pro（M5 Pro・メモリ 48 GB）。同一マシン上の Ollama で `ollama run` したときの体感。プロンプト長などで変動します。

---

<!-- _class: compact -->

## 導入手順

- macOS: `brew install ollama` → `brew services start ollama`
- ほか OS は公式インストーラ（常駐あり）
- `ollama --version` で動作確認
- `ollama pull <モデル>` でモデル取得
- `ollama run` で対話、`ollama list` で一覧

![w:85%](https://static.zenn.studio/user-upload/d23805591988-20260509.png)

---

## 翻訳専用モデルを作る

- 翻訳など、用途に合わせた派生モデルを作れる
- `Modelfile` で SYSTEM 文やパラメータを定義
- `ollama create` でビルドし、名前付きで `run` する

---

## Modelfile 例

`TranslateModelfile` の例:

```dockerfile
FROM qwen2.5:14b

SYSTEM """
あなたは翻訳者です。ユーザーが与えるテキストを、指定された言語へ翻訳してください。
- 原文の意味を損なわないこと。
- 不要な前置き・説明・「翻訳しました」などのメタ文は出さず、訳文のみを出力すること。
- 用語が不明なときは文脈から最も自然な訳を選び、推測であることが明らかな場合だけ簡潔に注を添えること。
"""
```

---

<!-- _class: compact -->

## 作成と実行

- `ollama create qwen-translate -f TranslateModelfile`
- `ollama run qwen-translate`

![w:85%](https://static.zenn.studio/user-upload/c43e87318ff6-20260509.png)

---

## Raycast 連携

- Raycast Store の [Ollama AI 拡張](https://www.raycast.com/massimiliano_pasquini/raycast-ollama) を入れる
- 利用前に Ollama が起動し、意図した翻訳用モデルが入っていること
- 「Create Custom Commands」で**翻訳用モデル**を選び、プロンプトに `{selection}` を入れる
- エディタ等で選んだテキストがプロンプトへ差し込まれる**翻訳コマンド**として使える

---

<!-- _class: hero-shot -->

## Raycast（画面）

![w:94%](https://static.zenn.studio/user-upload/4dfd2a21ec01-20260509.png)

---

## 活用と注意

- **活用**: 社外秘・個人情報の下書き／要約。送信を抑え、オフラインや通信不安定時も使いやすい
- **活用**: API 課金やレート制限を気にせず試行錯誤しやすい
- **向く**: 整形・言い換え・要約のたたき台、アイデア出し、与えられたテキスト上の作業
- **向く**: プライバシー・オフライン運用・従量支出の抑制に寄せられる
- **注意**: 最新事実や未入力の社内情報は不正確になり得る（検索・RAG がなければ特に）。医療・法律・投資の確定回答や複雑な計算・厳密な論証には依存しない
