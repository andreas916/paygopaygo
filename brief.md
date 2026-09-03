You are an expert product designer, UX designer, and frontend engineer.

Your task is to build a HIGH-FIDELITY INTERACTIVE MOBILE PROTOTYPE for a university/product-design evaluation.

IMPORTANT:
This is NOT a real modification of the GoPay application.
This is a CONCEPTUAL PROTOTYPE that demonstrates a proposed enhancement to GoPay's existing "Laporan Pengeluaran / Laporan Keuangan" experience.

The evaluator must be able to open the prototype, interact with it, and understand the complete feature concept without needing a backend, real payment system, real GoPay API, or authentication.

==================================================

1. # PRODUCT CONTEXT

The existing GoPay experience already allows users to see their monthly spending from the GoPay homepage and enter a spending report page.

The existing spending report concept includes:

- monthly total spending
- weekly spending overview
- spending categories
- transaction history
- manual expense recording

The proposed enhancement adds a lightweight PERSONAL BUDGET PLANNING layer on top of that experience.

The goal is NOT to replace the existing GoPay financial report.

Instead, enhance it so that users can:

1. Set/see monthly spending allocations by category.
2. Understand their daily spending allowance.
3. Receive category-based recommendations.
4. Move budget from one category to another when another category is insufficient.
5. Receive spending reminders/notifications after relevant transactions.

The result should feel like a natural extension of GoPay's existing financial-report experience.

================================================== 2. CORE PRODUCT IDEA
==================================================

Call the concept:

"Budget & Spend"

or a similarly natural Indonesian GoPay-style label.

The conceptual feature works using CATEGORY BUDGETS.

There is NO SAVING CATEGORY.

This is extremely important.

The available budget is only distributed between spending categories.

Example categories:

- General
- Food
- Transport
- Shopping
- Lifestyle

Do NOT create:

- Saving
- Investment
- Emergency Fund
- Debt repayment

unless needed only as part of existing GoPay product context outside this prototype.

The prototype is specifically about managing EXISTING SPENDING CATEGORIES.

================================================== 3. BUDGET LOGIC
==================================================

The user has a monthly spending budget.

The system distributes the monthly budget into categories using percentages.

Example demo data:

Monthly budget:
Rp3.000.000

Category allocation:

General 20% = Rp600.000
Food 30% = Rp900.000
Transport 20% = Rp600.000
Shopping 15% = Rp450.000
Lifestyle 15% = Rp450.000

Total:
Rp3.000.000

The percentages must add up to exactly 100%.

The user should be able to understand that these are MONTHLY category budgets.

================================================== 4. DAILY BUDGET LOGIC
==================================================

The prototype must communicate that GoPay's system takes the monthly category budget and distributes it into DAILY spending guidance.

The system distinguishes between:

- Weekday
- Weekend

For the prototype, use a simple deterministic rule.

Example:

weekdayWeight = 1
weekendWeight = 1.25

The remaining category budget is distributed across the remaining weekdays and weekends using these weights.

Example:

Food remaining:
Rp700.000

Remaining:
15 weekdays
5 weekend days

Total weighted days:
15 _ 1 + 5 _ 1.25
= 21.25 weighted days

Weekday recommended allowance:
700.000 / 21.25
≈ Rp32.900

Weekend recommended allowance:
32.900 \* 1.25
≈ Rp41.100

Round to friendly amounts in the UI.

IMPORTANT:
This is a PROTOTYPE RULE, NOT a claim about how the real GoPay algorithm works.

Present it as:
"Simulasi budget harian"

or:
"Budget harian kamu dihitung dari sisa budget bulan ini."

Do not falsely imply that this exact algorithm is used by GoPay.

================================================== 5. DYNAMIC BUDGET REALLOCATION
==================================================

This is one of the MOST IMPORTANT interactions.

If one category is running out of budget, the user can move budget from another category.

Example:

Food:
Budget Rp900.000
Used Rp930.000
Status Over budget Rp30.000

The UI should not introduce saving as a solution.

Instead:

"Budget Makanan kamu kurang Rp30.000.
Mau ambil dari kategori mana?"

Available categories:

General
Sisa Rp200.000

Transport
Sisa Rp150.000

Shopping
Sisa Rp80.000

The user selects:
General

Amount:
Rp30.000

Confirmation:

"Ambil Rp30.000 dari General ke Makanan?"

After confirmation:

Food:
Budget becomes Rp930.000

General:
Remaining budget decreases by Rp30.000

Overall monthly budget DOES NOT increase.

This is a redistribution of existing budget, not additional money.

================================================== 6. CATEGORY RECOMMENDATION
==================================================

Every category can optionally contain a contextual recommendation.

Example:

FOOD

"Sisa budget makanan hari ini"
Rp20.000

Recommendation:

"Masih punya Rp20.000 buat makan hari ini."

Recommended:

Sei Sapi
Rp18.000
⭐ 4.8

CTA:
"Lihat rekomendasi"

Another example:

TRANSPORT

"Sisa budget transport hari ini"
Rp25.000

Recommended:
GoRide
Mulai Rp12.000

CTA:
"Lihat rekomendasi"

Another:

SHOPPING

"Sisa budget belanja minggu ini"
Rp75.000

Recommended:
Promo pilihan yang masih sesuai budget

The recommendations are DEMO CONTENT only.

Do not connect to real GoFood, GoRide, merchant APIs, maps, or payment APIs.

================================================== 7. SPENDING REMINDER / NOTIFICATION
==================================================

The concept also includes contextual reminders after a relevant spending transaction.

For example:

User spends:
Rp28.000 on GoFood

Then the prototype can show an in-app notification/toast:

"Baru saja makan pakai GoFood 🍜"

"Budget Makanan kamu hari ini tersisa Rp12.000."

"Masih aman untuk 1x makan ringan hari ini."

or:

"Pengeluaran makananmu sudah 82% dari budget harian."

The reminder must NOT sound judgmental or shame the user.

Avoid:
"Kamu boros."

Prefer:
"Budget makanan hari ini hampir habis."
"Masih ada Rp8.000 untuk makanan hari ini."

The notification should feel helpful.

================================================== 8. REQUIRED USER FLOW
==================================================

The prototype MUST support this primary evaluator flow:

FLOW A — ENTER FINANCIAL REPORT

1. Start on GoPay Home.
2. User sees:
   - GoPay balance
   - Existing-style spending summary
   - text such as:
     "Rp1.820.000 sudah terpakai bulan ini" or else that the point is showing the amount of money that the user has spent this month.
3. User taps the monthly spending summary.
4. Navigate to the enhanced financial report.

The transition should feel like the existing GoPay behavior.

---

FLOW B — UNDERSTAND MONTHLY BUDGET

On the Financial Report page:

User immediately sees:

"Laporan Keuangan"

Month:
September 2026

Then:

Total spending
Rp1.820.000

Monthly budget
Rp3.000.000

Remaining
Rp1.180.000

Then a visually clear overview of category budgets.

Example:

General
Rp420.000 / Rp600.000

Food
Rp520.000 / Rp900.000

Transport
Rp380.000 / Rp600.000

Shopping
Rp250.000 / Rp450.000

Lifestyle
Rp250.000 / Rp450.000

Each category should have a progress indicator.

---

FLOW C — SEE DAILY ALLOWANCE

User taps Food.

Open a bottom sheet or expandable detail section.

Show:

"Makanan"

Sisa budget bulan ini:
Rp380.000

Hari ini:
Weekday

Budget hari ini:
Rp32.000

Sudah dipakai hari ini:
Rp14.000

Sisa hari ini:
Rp18.000

Then:

"Rekomendasi buat kamu"

Sei Sapi
Rp18.000

CTA:
"Lihat rekomendasi"

This is enough to communicate the concept without building another page.

---

FLOW D — CATEGORY IS NOT ENOUGH

Create a second important demo state.

Food becomes over budget.

Display:

"Makanan melebihi budget"

Budget:
Rp900.000

Terpakai:
Rp930.000

Lebih:
Rp30.000

CTA:
"Atur ulang budget"

Tapping it opens a bottom sheet:

"Ambil budget dari kategori lain"

Selectable sources:

General
Sisa Rp200.000

Transport
Sisa Rp150.000

Shopping
Sisa Rp80.000

Lifestyle
Sisa Rp120.000

User selects General.

Then:

Amount:
Rp30.000

CTA:
"Gunakan Rp30.000"

Then confirmation.

After confirmation, update the category values.

---

FLOW E — TRANSACTION REMINDER

Create a demo interaction representing a GoFood purchase.

A button can exist in the prototype such as:

"Simulasikan transaksi GoFood Rp28.000"

This is acceptable because this is a prototype.

After tapping:

1. Add the transaction to the demo state.
2. Update Food spending.
3. Recalculate remaining Food budget.
4. Recalculate today's Food allowance.
5. Show notification/toast.

Example:

"GoFood • Rp28.000"

"Budget makanan hari ini tersisa Rp12.000."

The UI should visibly update.

This makes the evaluator understand that the budget system is dynamic.

================================================== 9. SCREEN ARCHITECTURE
==================================================

Do NOT create a huge multi-page application.

Only build TWO MAIN PAGES:

PAGE 1:
GoPay Home

PAGE 2:
Enhanced Laporan Keuangan

Additional states can use:

- bottom sheets
- dialogs
- overlays
- toasts
- expandable cards
- notification banners

These do NOT count as separate main pages.

The prototype should remain easy to explain during a presentation.

================================================== 10. PAGE 1 — GOPAY HOME
==================================================

A convincing GoPay-inspired home screen.

Only build the elements necessary for the prototype.

Structure likely (not must precise):

Top:
GoPay branding / header
User/profile area if visually appropriate

Balance card:
"Saldo GoPay"
Rp3.482.000

Then an existing-style spending entry:

"Rp1.820.000 sudah terpakai bulan ini"
[arrow]

Make this element highly tappable.

When tapped:
Navigate to Financial Report.

Below it:
A few lightweight service shortcuts so the page feels like a real fintech home screen.

For example:
Transfer
QRIS
GoFood
GoRide

Do not overbuild these services.

Their only purpose is to establish visual context.

================================================== 11. PAGE 2 — ENHANCED FINANCIAL REPORT
==================================================

This is the MOST important screen.

The page should have likely (not must precise):

Header:
"Laporan Keuangan"

Month selector:
"September 2026"

Primary summary:

Total pengeluaran
Rp1.820.000

Budget bulan ini
Rp3.000.000

Sisa budget
Rp1.180.000

Then a budget overview.

Possible information hierarchy:

[Monthly overview]

Rp1.820.000
dari Rp3.000.000

60.7% budget terpakai

---

[Budget kategori]

General
Rp420.000 / Rp600.000

Food
Rp520.000 / Rp900.000

Transport
Rp380.000 / Rp600.000

Shopping
Rp250.000 / Rp450.000

Lifestyle
Rp250.000 / Rp450.000

---

[Today's guidance]

Hari ini, Kamis

Budget yang masih tersedia:

Food Rp18.000
Transport Rp24.000
Shopping Rp35.000

---

[Recommendation]

"Masih ada Rp18.000 untuk makanan hari ini."

Sei Sapi
Rp18.000

[Lihat rekomendasi]

---

[Recent activity]

GoFood
Rp28.000
Food
Today

GoRide
Rp15.000
Transport
Today

AND BY THE WAY FOR UI/UX. THERE WILL BE THE DESIGN MOCKUP, SO YOU CAN MAKE THEM FOR STRONG REFERENCES (THEY ARE MAYBE ALSO IN THE MOCKUP FILE OR ELSE THAT LATER WILL BE INCLUDED IN FURTHER PROMPT)

================================================== 12. EXISTING GOPAY REPORT CONTEXT
==================================================

Keep some familiar financial-report patterns from the existing product/REFERENCE, like (maybe):

- total spending
- category breakdown
- weekly spending trend
- transaction history

But the prototype's NEW value proposition must be visually dominant:

BUDGET → DAILY GUIDANCE → RECOMMENDATION → REALLOCATION

Do not let the existing report features overwhelm the proposed enhancement.

The evaluator must instantly understand:

"This is still GoPay's financial report, but now it helps me PLAN and CONTROL my spending."

================================================== 13. DESIGN DIRECTION
==================================================

Visual direction:

Make it feel like a modern GoPay product.

Do NOT make it look like a generic finance dashboard.

Avoid:

- dark enterprise dashboards
- excessive gradients
- desktop-style tables
- overly sophisticated analytics UI
- too many colors
- unnecessary illustrations
- complicated charts

This is a MOBILE FINTECH APP.

================================================== 14. GO PAY VISUAL REFERENCE
==================================================

Use the current/publicly available GoPay experience only as VISUAL INSPIRATION. OR THERE WILL BE SOME DESIGN MOCKUP.

Use text, layout patterns, spacing, colors, and interaction conventions inspired by GoPay (MAYBE THERE ARE DESIGN MOCKUP OF REAL GOPAY SCREEN).

Do not use copyrighted external images unless necessary.

Use simple icons / SVG / existing icon libraries.

================================================== 15. INTERACTION REQUIREMENTS
==================================================

The prototype must actually work.

Required interactions (LIKELY):

1. Homepage spending card → Financial Report.

2. Category card → category detail.

3. Category detail → daily budget explanation.

4. Recommendation card → recommendation interaction/modal.

5. "Atur ulang budget" → budget reallocation sheet.

6. Selecting a source category → amount selection.

7. Confirm transfer → update values.

8. "Simulasikan transaksi GoFood" → update spending.

9. Update notification after transaction.

10. Month selector may visually work, but does NOT need real historical data.

11. Back navigation should work naturally.

================================================== 16. DEMO STATES
==================================================

The prototype should be designed around a deterministic demo dataset.

STATE 1 — HEALTHY

Food:
Budget Rp900.000
Spent Rp520.000
Remaining Rp380.000

Today:
Daily allowance Rp32.000
Used today Rp14.000
Remaining today Rp18.000

STATE 2 — AFTER GOFOOD TRANSACTION

Simulate:
GoFood Rp28.000

Food:
Spent Rp548.000

Daily food remaining:
Rp18.000 → Rp0 or appropriate recalculated value depending on demo logic.

Show reminder.

STATE 3 — OVER BUDGET

Food:
Budget Rp900.000
Spent Rp930.000

Show:

"Budget Makanan terlewati Rp30.000"

CTA:
"Atur ulang budget"

STATE 4 — AFTER REALLOCATION

Move:
Rp30.000

From:
General

To:
Food

Update both categories.

Show confirmation:

"Budget berhasil dipindahkan"

"Makanan +Rp30.000"
"General -Rp30.000"

================================================== 17. MICROCOPY
==================================================

Use natural Indonesian conversational copy.

Avoid highly formal financial terminology.

Examples:

"Budget kamu bulan ini"

"Sisa budget kamu"

"Budget hari ini"

"Masih aman untuk hari ini"

"Budget Makanan kamu hampir habis"

"Ambil dari kategori lain"

"Atur ulang budget"

"Gunakan budget General"

"Budget berhasil dipindahkan"

"Baru saja makan pakai GoFood 🍜"

"Sisa budget makanan hari ini Rp12.000"

Keep copy short.

================================================== 18. IMPORTANT PRODUCT PRINCIPLES
==================================================

The prototype must communicate these ideas clearly:

A. Monthly budget is set by percentage.

B. The system turns monthly budget into daily guidance.

C. Weekday and weekend can have different daily allowances.

D. Spending in one category can impact available budget in that category.

E. Users can reallocate budget between OTHER EXISTING CATEGORIES.

F. There is NO SAVING CATEGORY in this budgeting system.

G. Total monthly budget cannot magically increase through reallocation.

H. Recommendations are contextual to the user's remaining budget.

I. Notifications are triggered after relevant spending.

J. The product should help the user make decisions, not shame the user.

================================================== 19. TECHNICAL REQUIREMENTS
==================================================

First inspect the existing repository.

Do NOT blindly replace the current stack. IF THERE ARE NO CURRENT STACKS, USE WHATEVER FRAMEWORK THAT YOU THINK IS APPROPRIATE TO MAKE THIS PROTOTYPE WORKS WELL.

Determine:

- framework
- package manager
- routing
- styling system
- component system
- existing design system
- existing assets

Then use the existing architecture whenever reasonable.

Prefer:

- React / Next.js if already present
- TypeScript
- componentized UI
- local state
- static seeded demo data
- no backend

Do NOT add:

- database
- authentication
- API server
- payment integration
- real GoPay API
- real GoFood integration
- map integration
- notification service
- analytics backend

Everything can be simulated locally.

================================================== 20. DATA MODEL
==================================================

Create a simple frontend data model similar to:

MonthlyBudget {
total
categories[]
}

CategoryBudget {
id
name
percentage
monthlyBudget
spent
remaining
dailyAllowance
weekdayAllowance
weekendAllowance
}

Transaction {
id
merchant
amount
category
service
date
}

Recommendation {
category
name
price
rating
reason
}

The state should be recalculated whenever a transaction or reallocation occurs.

================================================== 21. COMPONENT SUGGESTION
==================================================

Use reusable components such as (LIKELY):

GoPayHome
SpendingSummaryCard
FinancialReport
MonthlyBudgetSummary
CategoryBudgetCard
DailyBudgetCard
RecommendationCard
TransactionList
BudgetReallocationSheet
CategoryDetailSheet
TransactionSimulationButton
SpendingReminderToast
ConfirmationDialog

Do not create unnecessary abstraction.

Prioritize a clean prototype.

================================================== 22. PRESENTATION / EVALUATION REQUIREMENT
==================================================

This prototype will be demonstrated to an evaluator.

Therefore, it must be obvious what the new feature is.

The evaluator should understand the entire concept within approximately 2 minutes.

The recommended demo sequence:

1. Open GoPay Home.
2. Point to "sudah terpakai bulan ini."
3. Tap it.
4. Show monthly budget overview.
5. Open Food.
6. Show today's spending allowance.
7. Show recommendation.
8. Simulate a GoFood transaction.
9. Show updated remaining budget + notification.
10. Trigger Food over-budget state.
11. Open "Atur ulang budget."
12. Move money from General to Food.
13. Show updated budget.

This flow must work smoothly.

================================================== 23. VISUAL PRIORITY
==================================================

Prioritize:

1. clarity
2. realism
3. interaction
4. visual hierarchy
5. consistency
6. polish

Do not prioritize:

- backend complexity
- architectural complexity
- excessive pages
- exhaustive GoPay feature coverage

================================================== 24. SAFETY / PRODUCT HONESTY
==================================================

Because this is a concept prototype:

Do not label the prototype as an official GoPay feature.

If necessary, use a subtle development/demo indicator outside the primary phone UI, but do not ruin the visual realism of the prototype.

Do not claim:
"This is how GoPay's actual budget algorithm works."

Instead communicate:
"Konsep enhancement"
or
"Simulasi budget harian"

================================================== 25. FINAL IMPLEMENTATION REQUIREMENTS
==================================================

After implementing:

1. Run the application.
2. Check the homepage.
3. Check the financial report page.
4. Test all required interactions.
5. Fix visual overflow on a 390x844 viewport.
6. Make sure bottom sheets/modals do not break scrolling.
7. Make sure numbers update correctly after reallocation.
8. Make sure the demo transaction updates category spending.
9. Make sure the notification appears.
10. Make sure browser refresh starts from a sensible demo state.

Do not stop after generating static UI.

The final result MUST BE AN INTERACTIVE, PRESENTABLE PROTOTYPE.

================================================== 26. SUCCESS CRITERIA
==================================================

The prototype is successful when a person who knows nothing about the project can immediately answer:

"What is this feature?"

Answer:
"It helps me divide my monthly spending budget into categories, tells me how much I can spend each day, recommends things that fit my remaining budget, warns me when I'm approaching a limit, and lets me move budget between categories when one category runs out."

The final product should feel like:

"GoPay Financial Report + Personal Budget Guidance"

rather than:

"a completely separate budgeting app."

==================================================

START NOW.

First inspect the repository and understand the existing project structure.

Then implement the prototype following the requirements above.

Do not ask for unnecessary clarification.

Make reasonable UX/product decisions when details are unspecified, while preserving the core concept.

At the end, summarize:

- what was implemented
- main user flow
- demo interactions
- files/components changed
