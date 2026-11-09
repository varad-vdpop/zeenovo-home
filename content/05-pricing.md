# Pricing

Prices below come from the staging build and are `[CONFIRM 8]`. Confirm currency (CAD), tax treatment and whether annual prices are billed upfront.

---

## `/pricing` Pricing

Status: not built. Needs a pricing table block. This is in the quote ("Pricing and ROI calculator experience") but there is no approved design for it in the repo yet. **Needs design approval.**

**Meta title:** Pricing | ZeeNovo
**Meta description:** ZeeNovo Clinical from C$29.99 a month, Assure from C$19.99 a month. Unlimited users on every plan, and your pharmacy website included.

**HERO-PRODUCT** (no visual)
- H1: Simple pricing. / No per-user fees.
- Description: Every plan includes unlimited team members, each with their own login, and your pharmacy website.
- Buttons: Book a Demo · Register Pharmacy

**Plans**

| | Assure | Combo (recommended) | Clinical |
|---|---|---|---|
| Monthly | C$19.99/mo | C$44.99/mo | C$29.99/mo |
| Annual | C$199/yr | C$449.99/yr | C$299/yr |
| Includes | Incident reporting · ISMP MSSA · Pharmacy self-assessment · CQI meetings and goals · Safety analytics | Everything in Clinical · Everything in Assure · Priority support · Multi-location ready | Minor ailments · Vaccinations and injections · Prescribing support · Automated follow-up · Documentation and eFax |
| Button | Start with Assure | Get the Combo | Start with Clinical |

- Included with every plan: ZeeNovo Sites, your pharmacy website with live booking.
- Add-on: ZeeNovo Patient Portal with voice booking. Price on request. `[CONFIRM 8]`
- Enterprise: Multi-location groups and chain dashboards. Talk to us. → `/solutions/multi-location-groups`

**Plan facts strip** (single line, five items)
No credit card to start · Cancel anytime · Unlimited users · Website included · Set up in under a day

**FAQ** (needs design approval)
- Is there a free trial? Yes. You can start without a credit card. Most pharmacies are set up within a day.
- Do you charge per user? No. Every plan includes unlimited team members, each with their own login and role.
- Can I change plans later? Yes. Move between Clinical, Assure and Combo, or add the Patient Portal, at any time. Changes apply from your next billing cycle.
- Is the ISMP MSSA included? Yes. It is included in ZeeNovo Assure at no extra cost.
- Do prices include tax? `[CONFIRM 8]`
- How do multi-location groups buy? Through an enterprise agreement. Book a call and we will scope it with you.

**CTA-MAIN**
- Eyebrow: Not sure which plan?
- H2: Work out what ZeeNovo / is worth to your pharmacy.
- Button: Open the ROI Calculator → `/pricing/roi-calculator`

---

## `/pricing/roi-calculator` ROI Calculator

Status: not built. Needs a calculator block. **Needs design approval.** Copy and logic below.

**Meta title:** ROI Calculator | ZeeNovo
**Meta description:** Estimate the clinical revenue and staff time ZeeNovo could add to your pharmacy each month.

**Hero**
- H1: What is ZeeNovo / worth to your pharmacy?
- Description: Enter a few numbers from a typical month. The estimate updates as you type.

**Inputs**

| Label | Help text | Default |
|---|---|---|
| Minor ailments assessments per month | Count all conditions. | 40 |
| Average fee per assessment (C$) | Use your province's funded rate. | 19 `[CONFIRM]` |
| Vaccinations per month | Include flu, COVID-19 and others. | 120 |
| Incident reports per month | Include near misses. | 6 |
| Staff cost per hour (C$) | Pharmacist or technician, whoever does the admin. | 55 |
| Your plan | Clinical, Assure or Combo | Combo |

**Assumptions** (shown under the inputs, editable by ZeeNovo, not the visitor) `[CONFIRM 3]`
- Documentation time saved per clinical service: 8 minutes
- Time saved per incident report: 15 minutes (from over 20 minutes to under 5)
- Additional assessments enabled by time saved: calculated from hours saved ÷ 20 minutes per assessment

**Outputs**
- Staff hours saved per month
- Value of time saved (C$)
- Additional assessments the saved time could cover
- Additional clinical revenue (C$)
- ZeeNovo cost per month (C$)
- Estimated monthly return (C$)

**Disclaimer** (under the outputs)
This is an estimate based on the numbers you entered and the assumptions shown. It is not a guarantee of revenue. Funded rates and eligibility vary by province.

**Buttons:** Book a Demo · See Pricing
