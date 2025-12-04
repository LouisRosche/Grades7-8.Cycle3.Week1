# KAMS Science Curriculum System
## Scalable Architecture for 8 Cycles × 2 Grades × 3 Weeks

---

## Quick Navigation

### For Teaching This Week

| Task | Grade 7 | Grade 8 |
|------|---------|---------|
| **Lesson Plan** | [Week 1 Plan](content/grade7/cycle03/week1/lesson-plan.md) | [Week 1 Plan](content/grade8/cycle03/week1/lesson-plan.md) |
| **Student Page** | [Canvas HTML](content/grade7/cycle03/week1/student-page.html) | [Canvas HTML](content/grade8/cycle03/week1/student-page.html) |
| **Forms Script** | [G7 Forms](content/grade7/cycle03/week1/forms.gs) | [G8 Forms](content/grade8/cycle03/week1/forms.gs) |

### For Planning & Assessment

| Resource | Grade 7 | Grade 8 |
|----------|---------|---------|
| **Curriculum Design** | [G7 Cycle 3](content/grade7/cycle03/curriculum-design.md) | [G8 Cycle 3](content/grade8/cycle03/curriculum-design.md) |
| **Rubrics** | [G7 Rubrics](content/grade7/cycle03/rubrics.md) | [G8 Rubrics](content/grade8/cycle03/rubrics.md) |

### System Documentation

| Document | Purpose |
|----------|---------|
| [ARCHITECTURE.md](ARCHITECTURE.md) | Complete system design, data flow, scaling plan |
| [Master Config](config/master-config.json) | Central configuration for all cycles |
| [MTSS Framework](framework/mtss-framework.md) | Multi-tiered intervention system |
| [Pedagogical Approach](framework/pedagogical-approach.md) | 3D learning, differentiation |
| [Technical Reference](framework/technical-reference.md) | Forms API rules, troubleshooting |

---

## Repository Structure

```
C3.Repo/
├── README.md                              # You are here
├── ARCHITECTURE.md                        # System design document
│
├── config/                                # Master configuration (JSON)
│   ├── master-config.json                 # Central config for all cycles
│   ├── schema/                            # Validation schemas
│   │   ├── form-schema.json               # Question structure
│   │   └── mtss-schema.json               # Intervention data
│   └── cycles/
│       └── cycle03.json                   # Detailed Cycle 3 config
│
├── content/                               # All instructional content
│   ├── grade7/
│   │   └── cycle03/
│   │       ├── curriculum-design.md       # Standards, learning targets
│   │       ├── rubrics.md                 # Assessment rubrics
│   │       └── week1/
│   │           ├── forms.gs               # Form creation script
│   │           ├── lesson-plan.md         # Daily implementation
│   │           └── student-page.html      # Canvas page
│   └── grade8/
│       └── cycle03/ (same structure)
│
├── data/                                  # Data aggregation & MTSS
│   ├── aggregation/
│   │   ├── ResponseCollector.gs           # Fetches form responses
│   │   └── DataAggregator.gs              # Combines for analysis
│   ├── analysis/
│   │   └── ThreeDimensionalAnalyzer.gs    # SEP/DCI/CCC analysis
│   └── mtss/
│       └── output/                        # Generated intervention data
│
├── framework/                             # Foundational documentation
│   ├── pedagogical-approach.md
│   ├── technical-reference.md
│   └── mtss-framework.md
│
├── shared/                                # Cross-grade utilities
│   ├── FormUtils.gs
│   └── KAMS-Science-Hub.xlsx
│
├── templates/                             # Generation templates
│   ├── forms/                             # Form generation
│   ├── html/                              # HTML templates
│   └── docs/                              # Document templates
│
├── scripts/                               # Automation scripts
└── archive/                               # Historical reference
```

---

## System Overview

### Scale
- **8 Cycles** (Cycle 3-10, academic year)
- **2 Grades** (7 & 8, expandable)
- **3 Weeks per Cycle** (24 instructional weeks)
- **5 Forms per Week** (up to 480 total forms)
- **100 Points per Week** (consistent structure)

### 3-Dimensional Learning Core

Every assessment question is tagged with NGSS 3D metadata:

| Dimension | Code | Example |
|-----------|------|---------|
| **SEP** | SEP-6 | Constructing Explanations |
| **DCI** | PS1.B | Chemical Reactions |
| **CCC** | CCC-5 | Energy and Matter |

This enables analysis of student proficiency by practice, concept, and crosscutting theme—not just raw scores.

### Point Structure (Per Week = 100 pts)

| Form | Points | Auto-Graded | Focus |
|------|--------|-------------|-------|
| Hook | 12 | ~25% | Phenomenon engagement, prior knowledge |
| Station 1 | 20 | ~50% | Core concept with spiral retrieval |
| Station 2 | 20 | ~40% | Application with manipulatives |
| Station 3 | 25 | 0% | Engineering design (rubric-scored) |
| Exit Ticket | 23 | ~35% | 2 new + 2 spiral + 1 integration + 1 SEP-1 |

---

## Data Flow & MTSS

```
Form Responses → ResponseCollector.gs → DataAggregator.gs
                                              ↓
                                   ThreeDimensionalAnalyzer.gs
                                              ↓
                              ┌───────────────┼───────────────┐
                              ↓               ↓               ↓
                         SEP Analysis    DCI Analysis    CCC Analysis
                              ↓               ↓               ↓
                              └───────────────┼───────────────┘
                                              ↓
                                    MTSS Tier Assignment
                                              ↓
                              ┌───────────────┼───────────────┐
                              ↓               ↓               ↓
                         Tier 1 (70%+)   Tier 2 (50-69%)  Tier 3 (<50%)
                              ↓               ↓               ↓
                         Universal      Small Group     Intensive
                         Instruction    Intervention    Support
```

### MTSS Tiers

| Tier | Range | Population | Support |
|------|-------|------------|---------|
| **1** | 70-100% | ~80% target | Standard differentiation |
| **2** | 50-69% | ~15% target | Small group reteach, peer tutoring |
| **3** | 0-49% | ~5% target | 1:1 intervention, alternative assessment |

---

## Configuration System

All cycle content is driven by JSON configuration:

```json
// config/cycles/cycle03.json (excerpt)
{
  "cycle": 3,
  "grades": {
    "7": {
      "topic": "Climate Change & Energy Flow",
      "ngss": { "primary": "MS-ESS3-5", "spiral": ["MS-PS1-5"] },
      "misconceptions": [
        { "id": "bond-break-release", "frequency": 60 }
      ],
      "weeks": {
        "1": {
          "title": "The Greenhouse Effect Mystery",
          "stations": { ... }
        }
      }
    }
  }
}
```

This enables:
- Automated form generation from templates
- Validation of content completeness
- Tracking of what's deployed vs. planned
- Easy scaling to additional cycles

---

## Quick Start

### For Teachers

1. **Find your content:** `content/grade{7|8}/cycle03/week1/`
2. **Deploy forms:** Run `forms.gs` in Google Apps Script
3. **Get student page:** Upload `student-page.html` to Canvas
4. **Follow lesson plan:** `lesson-plan.md` has daily schedules

### For Administrators

1. **Review architecture:** [ARCHITECTURE.md](ARCHITECTURE.md)
2. **Check configuration:** [config/master-config.json](config/master-config.json)
3. **Set up data collection:** Deploy scripts from `data/aggregation/`
4. **Configure MTSS:** Review [mtss-framework.md](framework/mtss-framework.md)

### For Developers

1. **Understand schemas:** `config/schema/*.json`
2. **Use templates:** `templates/` for new cycles
3. **Add automation:** `scripts/` for deployment tools

---

## Current Status

### Active Cycles
- **Cycle 3** (December 2025): Week 1 complete, Weeks 2-3 planned

### Planned Cycles
- Cycles 4-10: Configuration structure ready, content pending

### Infrastructure
- ✅ Configuration system (JSON-based)
- ✅ Data aggregation scripts
- ✅ 3D learning analyzer
- ✅ MTSS intervention framework
- ⬜ Automated form deployment
- ⬜ Canvas gradebook sync
- ⬜ Teacher dashboard

---

## Version History

| Date | Change |
|------|--------|
| 2025-12-04 | Added scalable architecture, config system, MTSS framework, 3D analysis |
| 2025-12-04 | Initial reorganization for teaching/learning utility |
| 2025-12-01 | Cross-pollination improvements from audit |
| 2025-11-30 | Initial Cycle 3 curriculum design |

---

*KAMS Science Curriculum System | Version 2.0 | December 2025*
