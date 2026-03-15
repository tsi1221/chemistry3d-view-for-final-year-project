import { useState } from "react";
import "./App.css";

/* ================= TYPES ================= */
interface Item {
  name: string;
  link: string;
  chapter: string;
  subject: "Mathematics" | "Chemistry";
}

interface SectionProps {
  title: string;
  items: Item[];
  favorites: string[];
  toggleFavorite: (name: string) => void;
}

/* ================= COMPONENTS ================= */
function Section({ title, items, favorites, toggleFavorite }: SectionProps) {
  if (items.length === 0) return null;

  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {items.map((item, index) => {
          const isFavorite = favorites.includes(item.name);
          return (
            <div key={item.name} className="card-wrapper">
              <a
                className="card"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="number">{index + 1}</span>
                <p>{item.name}</p>
              </a>
              <button 
                className={`fav-btn ${isFavorite ? "active" : ""}`}
                onClick={() => toggleFavorite(item.name)}
                aria-label="Toggle Favorite"
              >
                {isFavorite ? "★" : "☆"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  /* ================= STATE ================= */
  const [searchTerm, setSearchTerm] = useState("");
  type Tab_ = "All" | "Mathematics" | "Chemistry" | "Favorites";
  const [activeTab, setActiveTab] = useState<Tab_>("All");

  // ✅ FIXED: Lazy initialization prevents cascading render error
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("eduTwin_bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  /* ================= ACTIONS ================= */
  const toggleFavorite = (name: string) => {
    const updated = favorites.includes(name)
      ? favorites.filter((f) => f !== name)
      : [...favorites, name];
    setFavorites(updated);
    localStorage.setItem("eduTwin_bookmarks", JSON.stringify(updated));
  };

  /* ================= FULL DATASET ================= */
  const allLessons: Item[] = [
    // Mathematics Chapter 1
    { name: "Set Membership Bubble", link: "/maths/chapter1maths/1The Set Membership Bubble.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Set Description Slider", link: "/maths/chapter1maths/2. Set Description Slider (Roster vs. Set-Builder).html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Empty Set Visualizer", link: "/maths/chapter1maths/3empty_set_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Finite vs Infinite Sets", link: "/maths/chapter1maths/4.finite_infinite_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Venn Diagram Lab", link: "/maths/chapter1maths/5.venn_diagram_lab.html.htm", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Subset Nesting Lab", link: "/maths/chapter1maths/6.subset_nesting_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Set Complement Visualizer", link: "/maths/chapter1maths/7.set_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Relative Complement", link: "/maths/chapter1maths/8.relative_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Symmetric Difference", link: "/maths/chapter1maths/9.symmetric_difference_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
    { name: "Cartesian Product Lab", link: "/maths/chapter1maths/10.cartesian_product_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },

    // Mathematics Chapter 2
    { name: "Number Architecture Lab", link: "/maths/chapter2/1.number_architecture_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Infinite Number Line", link: "/maths/chapter2/2.infinite_number_line_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Radical Slicer", link: "/maths/chapter2/3.radical_slicer_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Prime Factor Tree", link: "/maths/chapter2/4.prime_factor_tree_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Scientific Notation Scale", link: "/maths/chapter2/5.scientific_notation_scale_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Division Algorithm", link: "/maths/chapter2/6.division_algorithm_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Absolute Value Distance", link: "/maths/chapter2/7.absolute_value_distance_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Rationalize Denominator", link: "/maths/chapter2/8.rationalize_denominator_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "Repeating Decimal Spiral", link: "/maths/chapter2/9.repeating_decimal_spiral_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
    { name: "GCF Block Matcher", link: "/maths/chapter2/10.gcf_block_matcher_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },

    // Mathematics Chapter 3
    { name: "Equation Balance Lab", link: "/maths/chapter3/1.equation_balance_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
    { name: "Systems of Equations 3D", link: "/maths/chapter3/2.systems_of_equations_3d_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
    { name: "Absolute Value Tent", link: "/maths/chapter3/3.absolute_value_tent_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
    { name: "Quadratic Water Lab", link: "/maths/chapter3/4.quadratic_water_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
    { name: "Exponent Expansion Cube", link: "/maths/chapter3/5.exponent_expansion_cube.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },

    // Mathematics Chapter 4
    { name: "Trigonometry Unit Circle", link: "/maths/chapter4/1.trigonometry_unit_circle_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
    { name: "Shaded Volume Inequalities", link: "/maths/chapter4/2.shaded_volume_inequalities_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
    { name: "Quadratic Sign Chart", link: "/maths/chapter4/3.quadratic_sign_chart_rollercoaster.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
    { name: "Interval Notation Tube", link: "/maths/chapter4/4.interval_notation_tube_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
    { name: "Budget Boundary Lab", link: "/maths/chapter4/5.budget_boundary_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },

    // Chemistry Chapter 1
    { name: "Chemical Reactions", link: "/chapter1/chemicalreaction.html", chapter: "Chapter 1", subject: "Chemistry" },
    { name: "Boyle's Law", link: "/chapter1/BOYLE’S LAW.html", chapter: "Chapter 1", subject: "Chemistry" },
    { name: "Atomic Model", link: "/chapter1/atomicmodel.html", chapter: "Chapter 1", subject: "Chemistry" },
    { name: "Chemistry Central Science", link: "/chapter1/Chemistry – The Central Science.html", chapter: "Chapter 1", subject: "Chemistry" },
    { name: "Photosynthesis", link: "/chapter1/Photosynthesis.html", chapter: "Chapter 1", subject: "Chemistry" },
    { name: "State of Matter", link: "/chapter1/StateOfMatter.html", chapter: "Chapter 1", subject: "Chemistry" },

    // Chemistry Chapter 2
    { name: "Density Concept", link: "/chapter2/Density Concept (Mass ÷ Volume).html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Precision vs Accuracy", link: "/chapter2/PrecisionvsAccuracyDartboard.html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Rounding and Calculations Lab", link: "/chapter2/Rounding and Calculations Lab.html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "SI Base Units", link: "/chapter2/SI Base Units.html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "SI Prefixes Scale", link: "/chapter2/SI Prefixes Scale.html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Significant Figures Ruler", link: "/chapter2/Significant Figures Ruler .html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Derived Units Builder", link: "/chapter2/DerivedUnitsArea&Volum Builder .html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Scientific Notation Converter", link: "/chapter2/ScientificNotationConverter .html", chapter: "Chapter 2", subject: "Chemistry" },
    { name: "Speed & Acceleration Grapher", link: "/chapter2/SpeedandAccelerationGrapher.html", chapter: "Chapter 2", subject: "Chemistry" },

    // Chemistry Chapter 3
    { name: "Isotopes and Mass Spectrometry", link: "/chapter3/9. Isotopes and Mass Spectrometry.html", chapter: "Chapter 3", subject: "Chemistry" },
    { name: "Thomson vs Rutherford Experiment", link: "/chapter3/1. Thomson’s Plum Pudding vs. Rutherford’s Gold Foil.html", chapter: "Chapter 3", subject: "Chemistry" },
    { name: "Bohr Energy Transitions", link: "/chapter3/2. Bohr’s Model Energy Transitions.html", chapter: "Chapter 3", subject: "Chemistry" },
    { name: "CRT Deflection", link: "/chapter3/3. Cathode Ray Tube (CRT) Deflection.html", chapter: "Chapter 3", subject: "Chemistry" },
    { name: "Heisenberg Uncertainty", link: "/chapter3/4. Heisenberg Uncertainty Principle.html", chapter: "Chapter 3", subject: "Chemistry" },
    { name: "Photoelectric Effect", link: "/chapter3/5. Photoelectric Effect.html", chapter: "Chapter 3", subject: "Chemistry" },

    // Chemistry Chapter 4
    { name: "Rutherford Gold Foil Experiment", link: "/chapter4/ 1. The Rutherford Gold Foil Experiment.html", chapter: "Chapter 4", subject: "Chemistry" },
    { name: "Bohr Orbitals", link: "/chapter4/2. Bohr’s Orbitals & Energy Levels.html", chapter: "Chapter 4", subject: "Chemistry" },
    { name: "Wave Particle Duality", link: "/chapter4/4. Wave-Particle Duality (De Broglie).html", chapter: "Chapter 4", subject: "Chemistry" },
    { name: "Atomic Number vs Mass Number", link: "/chapter4/5. Atomic Number vs. Mass Number (Isotope Builder).html", chapter: "Chapter 4", subject: "Chemistry" },
    { name: "Periodic Trends Visualizer", link: "/chapter4/9. Periodic Trends Visualizer.html", chapter: "Chapter 4", subject: "Chemistry" },

    // Chemistry Chapter 5
    { name: "Octet Rule Simulation", link: "/chapter5/1.Octet Rule Simulation.html", chapter: "Chapter 5", subject: "Chemistry" },
    { name: "Electron Configuration Builder", link: "/chapter5/2.Electron Configuration Builder.html", chapter: "Chapter 5", subject: "Chemistry" },
    { name: "Formation of Ions", link: "/chapter5/3.  Formation of Ions (Cations & Anions).html", chapter: "Chapter 5", subject: "Chemistry" },
    { name: "Ionic Bond Formation", link: "/chapter5/4.Ionic Bond Formation (NaCl, CaCl₂).html", chapter: "Chapter 5", subject: "Chemistry" },
    { name: "Lewis Dot Structures", link: "/chapter5/5.Lewis Dot Structures.html", chapter: "Chapter 5", subject: "Chemistry" }
  ];

  /* ================= FILTER LOGIC ================= */
  const filteredItems = allLessons.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = 
      activeTab === "All" || 
      item.subject === activeTab || 
      (activeTab === "Favorites" && favorites.includes(item.name));
    return matchesSearch && matchesTab;
  });

  // Get unique chapter headers based on currently filtered lessons
  const visibleChapters = Array.from(new Set(filteredItems.map((i) => `${i.subject} – ${i.chapter}`)));

  return (
    <div className="container">
      <header className="glass-header">
        <h1 className="main-title">EduTwin Visualizer</h1>
        
        <div className="controls">
          <input
            type="text"
            placeholder="🔍 Search for a lesson..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="tabs">
            {["All", "Mathematics", "Chemistry", "Favorites"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab as Tab_)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="content">
        {visibleChapters.length > 0 ? (
          visibleChapters.map((title) => (
            <Section
              key={title}
              title={title}
              items={filteredItems.filter((i) => `${i.subject} – ${i.chapter}` === title)}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No lessons found. Try adjusting your search or tabs.</p>
          </div>
        )}
      </main>
    </div>
  );
}