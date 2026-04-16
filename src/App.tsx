import React, { useState } from 'react';
import './App.css';

// ================= TYPES =================
type Subject = 'Mathematics' | 'Chemistry' | 'Physics' | 'Biology';
type Grade = 9 | 10 | 11 | 12;

interface Item {
  name: string;
  link: string;
  chapter: string;
  subject: Subject;
  grade: Grade;
}

interface SectionProps {
  title: string;
  items: Item[];
  favorites: string[];
  toggleFavorite: (name: string) => void;
}

// ================= COMPONENTS =================
const Section: React.FC<SectionProps> = ({ title, items, favorites, toggleFavorite }) => {
  if (items.length === 0) return null;

  return (
    <div className="section">
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {items.map((item, idx) => {
          const isFavorite = favorites.includes(item.name);
          return (
            <div key={item.name} className="card-wrapper">
              <a
                className="card"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="number">{idx + 1}</span>
                <p>{item.name}</p>
              </a>
              <button
                className={`fav-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.name)}
                aria-label="Toggle Favorite"
              >
                {isFavorite ? '★' : '☆'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ================= FULL DATASET =================
// ----- GRADE 9 LESSONS (existing) -----
const grade9Lessons: Omit<Item, 'grade'>[] = [
  // ---------- MATHEMATICS ----------
  { name: "Set Membership Bubble", link: "/grade9/maths/chapter1maths/1The Set Membership Bubble.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Set Description Slider", link: "/grade9/maths/chapter1maths/2. Set Description Slider (Roster vs. Set-Builder).html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Empty Set Visualizer", link: "/grade9/maths/chapter1maths/3empty_set_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Finite vs Infinite Sets", link: "/grade9/maths/chapter1maths/4.finite_infinite_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Venn Diagram Lab", link: "/grade9/maths/chapter1maths/5.venn_diagram_lab.html.htm", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Subset Nesting Lab", link: "/grade9/maths/chapter1maths/6.subset_nesting_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Set Complement Visualizer", link: "/grade9/maths/chapter1maths/7.set_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Relative Complement", link: "/grade9/maths/chapter1maths/8.relative_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Symmetric Difference", link: "/grade9/maths/chapter1maths/9.symmetric_difference_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Cartesian Product Lab", link: "/grade9/maths/chapter1maths/10.cartesian_product_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Number Architecture Lab", link: "/grade9/maths/chapter2/1.number_architecture_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Infinite Number Line", link: "/grade9/maths/chapter2/2.infinite_number_line_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Radical Slicer", link: "/grade9/maths/chapter2/3.radical_slicer_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Prime Factor Tree", link: "/grade9/maths/chapter2/4.prime_factor_tree_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Scientific Notation Scale", link: "/grade9/maths/chapter2/5.scientific_notation_scale_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Division Algorithm", link: "/grade9/maths/chapter2/6.division_algorithm_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Absolute Value Distance", link: "/grade9/maths/chapter2/7.absolute_value_distance_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Rationalize Denominator", link: "/grade9/maths/chapter2/8.rationalize_denominator_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Repeating Decimal Spiral", link: "/grade9/maths/chapter2/9.repeating_decimal_spiral_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "GCF Block Matcher", link: "/grade9/maths/chapter2/10.gcf_block_matcher_lab.html", chapter: "Chapter 2: Number System", subject: "Mathematics" },
  { name: "Equation Balance Lab", link: "/grade9/maths/chapter3/1.equation_balance_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Systems of Equations 3D", link: "/grade9/maths/chapter3/2.systems_of_equations_3d.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Absolute Value Tent", link: "/grade9/maths/chapter3/3.absolute_value_tent_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Quadratic Water Lab", link: "/grade9/maths/chapter3/4.quadratic_water_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Exponent Expansion Cube", link: "/grade9/maths/chapter3/5.exponent_expansion_cube.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Trigonometry Unit Circle", link: "/grade9/maths/chapter4/1.trigonometry_unit_circle_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Shaded Volume Inequalities", link: "/grade9/maths/chapter4/2.shaded_volume_inequalities_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Quadratic Sign Chart", link: "/grade9/maths/chapter4/3.quadratic_sign_chart_rollercoaster.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Interval Notation Tube", link: "/grade9/maths/chapter4/4.interval_notation_tube_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Budget Boundary Lab", link: "/grade9/maths/chapter4/5.budget_boundary_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Unit Circle Trig Wave Visualizer", link: "/grade9/maths/chapter5/1.UnitCircle_TrigWave_Visualizer.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  { name: "3D Pythagoras Lab", link: "/grade9/maths/chapter5/2.3D_Pythagoras_Lab.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  { name: "Cone & Cylinder Volume Lab", link: "/grade9/maths/chapter5/3.Cone_Cylinder_Volume_Lab.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  { name: "Quadratic Paraboloid Lab", link: "/grade9/maths/chapter5/4.Quadratic_Paraboloid_Lab.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  { name: "3D Linear Plane Lab", link: "/grade9/maths/chapter5/5.3D_Linear_Plane_Lab.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  { name: "3D Trig Helix Lab", link: "/grade9/maths/chapter6/1.3D_Trig_Helix_Lab.html", chapter: "Chapter 6: Advanced Geometry", subject: "Mathematics" },
  { name: "2D Pythagoras Lab", link: "/grade9/maths/chapter6/2.D_Pythagoras_Lab.html", chapter: "Chapter 6: Advanced Geometry", subject: "Mathematics" },
  { name: "Grade 9 Math Volume Lab", link: "/grade9/maths/chapter6/3.Grade9_Math_Volume_Lab.html", chapter: "Chapter 6: Advanced Geometry", subject: "Mathematics" },
  { name: "Quadratic Reflector Lab", link: "/grade9/maths/chapter6/4.Quadratic_Reflector_Lab.html", chapter: "Chapter 6: Advanced Geometry", subject: "Mathematics" },
  { name: "Linear Planes 3D Lab", link: "/grade9/maths/chapter6/5.Linear_Planes_3D_Lab.html", chapter: "Chapter 6: Advanced Geometry", subject: "Mathematics" },
  { name: "Scaling & Similarity Lab", link: "/grade9/maths/chapter7/1.Scaling_Similarity_Lab.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  { name: "3D Pythagoras Space Diagonal", link: "/grade9/maths/chapter7/2.3D_Pythagoras_Space_Diagonal.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  { name: "Shadow Similarity Lab", link: "/grade9/maths/chapter7/3.Shadow_Similarity_Lab.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  { name: "3D Congruency Rigid Motion (4)", link: "/grade9/maths/chapter7/4.3D_Congruency_Rigid_Motion.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  { name: "3D Congruency Rigid Motion (5)", link: "/grade9/maths/chapter7/5.3D_Congruency_Rigid_Motion.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  { name: "3D Linear Planes Lab (C7)", link: "/grade9/maths/chapter7/5.3D_Linear_Planes_Lab.html", chapter: "Chapter 7: Similarity & Motion", subject: "Mathematics" },
  // ---------- CHEMISTRY (Grade 9) ----------
  { name: "Chemical Reactions", link: "/grade9/chemistry/chapter1/chemicalreaction.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "Boyle's Law", link: "/grade9/chemistry/chapter1/BOYLE’S LAW.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "Atomic Model", link: "/grade9/chemistry/chapter1/atomicmodel.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "Chemistry Central Science", link: "/grade9/chemistry/chapter1/Chemistry – The Central Science.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "Photosynthesis", link: "/grade9/chemistry/chapter1/Photosynthesis.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "State of Matter", link: "/grade9/chemistry/chapter1/StateOfMatter.html", chapter: "Chapter 1", subject: "Chemistry" },
  { name: "Density Concept", link: "/grade9/chemistry/chapter2/Density Concept (Mass ÷ Volume).html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Precision vs Accuracy", link: "/grade9/chemistry/chapter2/PrecisionvsAccuracyDartboard.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Rounding and Calculations Lab", link: "/grade9/chemistry/chapter2/Rounding and Calculations Lab.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "SI Base Units", link: "/grade9/chemistry/chapter2/SI Base Units.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "SI Prefixes Scale", link: "/grade9/chemistry/chapter2/SI Prefixes Scale.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Significant Figures Ruler", link: "/grade9/chemistry/chapter2/Significant Figures Ruler .html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Derived Units Builder", link: "/grade9/chemistry/chapter2/DerivedUnitsArea&Volum Builder .html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Scientific Notation Converter", link: "/grade9/chemistry/chapter2/ScientificNotationConverter .html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Speed & Acceleration Grapher", link: "/grade9/chemistry/chapter2/SpeedandAccelerationGrapher.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Isotopes and Mass Spectrometry", link: "/grade9/chemistry/chapter3/9. Isotopes and Mass Spectrometry.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Thomson vs Rutherford Experiment", link: "/grade9/chemistry/chapter3/1. Thomson’s Plum Pudding vs. Rutherford’s Gold Foil.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Bohr Energy Transitions", link: "/grade9/chemistry/chapter3/2. Bohr’s Model Energy Transitions.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "CRT Deflection", link: "/grade9/chemistry/chapter3/3. Cathode Ray Tube (CRT) Deflection.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Heisenberg Uncertainty", link: "/grade9/chemistry/chapter3/4. Heisenberg Uncertainty Principle.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Photoelectric Effect", link: "/grade9/chemistry/chapter3/5. Photoelectric Effect.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Rutherford Gold Foil Experiment", link: "/grade9/chemistry/chapter4/ 1. The Rutherford Gold Foil Experiment.html", chapter: "Chapter 4", subject: "Chemistry" },
  { name: "Bohr Orbitals", link: "/grade9/chemistry/chapter4/2. Bohr’s Orbitals & Energy Levels.html", chapter: "Chapter 4", subject: "Chemistry" },
  { name: "Wave Particle Duality", link: "/grade9/chemistry/chapter4/4. Wave-Particle Duality (De Broglie).html", chapter: "Chapter 4", subject: "Chemistry" },
  { name: "Atomic Number vs Mass Number", link: "/grade9/chemistry/chapter4/5. Atomic Number vs. Mass Number (Isotope Builder).html", chapter: "Chapter 4", subject: "Chemistry" },
  { name: "Periodic Trends Visualizer", link: "/grade9/chemistry/chapter4/9. Periodic Trends Visualizer.html", chapter: "Chapter 4", subject: "Chemistry" },
  { name: "Octet Rule Simulation", link: "/grade9/chemistry/chapter5/1.Octet Rule Simulation.html", chapter: "Chapter 5", subject: "Chemistry" },
  { name: "Electron Configuration Builder", link: "/grade9/chemistry/chapter5/2.Electron Configuration Builder.html", chapter: "Chapter 5", subject: "Chemistry" },
  { name: "Formation of Ions", link: "/grade9/chemistry/chapter5/3.  Formation of Ions (Cations & Anions).html", chapter: "Chapter 5", subject: "Chemistry" },
  { name: "Ionic Bond Formation", link: "/grade9/chemistry/chapter5/4.Ionic Bond Formation (NaCl, CaCl₂).html", chapter: "Chapter 5", subject: "Chemistry" },
  { name: "Lewis Dot Structures", link: "/grade9/chemistry/chapter5/5.Lewis Dot Structures.html", chapter: "Chapter 5", subject: "Chemistry" },
  // ---------- PHYSICS (Grade 9) ----------
  { name: "Definition and Nature of Physics", link: "/grade9/physics/chapter1/Definition%20and%20Nature%20of%20Physics.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Figure 3 - Physics Concept", link: "/grade9/physics/chapter1/figur-3.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Physics Branch Explorer", link: "/grade9/physics/chapter1/Physics%20Branch%20Explorer.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Figure 1 - Mechanics", link: "/grade9/physics/chapter2/fig-1.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 2 - Mechanics", link: "/grade9/physics/chapter2/fig-2.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 3 - Mechanics", link: "/grade9/physics/chapter2/fig-3.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 4 - Mechanics", link: "/grade9/physics/chapter2/fig-4.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 5 - Mechanics", link: "/grade9/physics/chapter2/fig-5.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 1 - Waves", link: "/grade9/physics/chapter3/fig-1.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 2 - Waves", link: "/grade9/physics/chapter3/fig-2.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 3 - Waves", link: "/grade9/physics/chapter3/fig-3.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 4 - Waves", link: "/grade9/physics/chapter3/fig-4.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 1 - Thermodynamics", link: "/grade9/physics/chapter4/fig-1.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },
  { name: "Figure 2 - Thermodynamics", link: "/grade9/physics/chapter4/fig-2.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },
  { name: "Figure 3 - Thermodynamics", link: "/grade9/physics/chapter4/fig-3.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },
  { name: "Figure 1 - Electromagnetism", link:"/grade9/physics/chapter5/fig-1.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 3 - Electromagnetism", link: "/grade9/physics/chapter5/fig-3.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 4 - Electromagnetism", link: "/grade9/physics/chapter5/fig-4.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 6 - Electromagnetism", link: "/grade9/physics/chapter5/fig-6.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 1 - Modern Physics", link: "/grade9/physics/chapter6/fig-1.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 2 - Modern Physics", link: "/grade9/physics/chapter6/fig-2.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 3 - Modern Physics", link: "/grade9/physics/chapter6/fig-3.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 4 - Modern Physics", link: "/grade9/physics/chapter6/fig-4.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 1 - Optics", link: "/grade9/physics/chapter7/fig-1.html", chapter: "Chapter 7: Optics & Light", subject: "Physics" },
  { name: "Figure 2 - Optics", link: "/grade9/physics/chapter7/fig-2.html", chapter: "Chapter 7: Optics & Light", subject: "Physics" },
];

// ----- GRADE 12 CHEMISTRY LESSONS (new) -----
const grade12ChemistryLessons: Omit<Item, 'grade'>[] = [
  // Chapter 1: Acid-Base Equilibria
  { name: "pH Scale", link: "/grade12Chemistry/chapter1/1pH_Scale.html", chapter: "Chapter 1: Acid-Base Equilibria", subject: "Chemistry" },
  { name: "Proton Transfer", link: "/grade12Chemistry/chapter1/2proton_transfer.html", chapter: "Chapter 1: Acid-Base Equilibria", subject: "Chemistry" },
  { name: "Water Ionization Lab", link: "/grade12Chemistry/chapter1/3water_ionization_lab.html", chapter: "Chapter 1: Acid-Base Equilibria", subject: "Chemistry" },
  { name: "Acid Strength Lab", link: "/grade12Chemistry/chapter1/4acid_strength_lab.html", chapter: "Chapter 1: Acid-Base Equilibria", subject: "Chemistry" },
  { name: "Acid-Metal Reaction Lab", link: "/grade12Chemistry/chapter1/5acid_metal_lab_v3.html", chapter: "Chapter 1: Acid-Base Equilibria", subject: "Chemistry" },
  // Chapter 2: Electrochemistry
  { name: "Galvanic Cell 3D", link: "/grade12Chemistry/chapter2/1galvanic_cell_3d.html", chapter: "Chapter 2: Electrochemistry", subject: "Chemistry" },
  { name: "Electroplating Lab 3D", link: "/grade12Chemistry/chapter2/2electroplating_lab_3d.html", chapter: "Chapter 2: Electrochemistry", subject: "Chemistry" },
  { name: "Atomic Redox Lab", link: "/grade12Chemistry/chapter2/3atomic_redox_lab.html", chapter: "Chapter 2: Electrochemistry", subject: "Chemistry" },
  { name: "Corrosion Pit Lab", link: "/grade12Chemistry/chapter2/4corrosion_pit_lab.html", chapter: "Chapter 2: Electrochemistry", subject: "Chemistry" },
  { name: "Hydrogen Fuel Cell 3D", link: "/grade12Chemistry/chapter2/5hydrogen_fuel_cell_3d.html", chapter: "Chapter 2: Electrochemistry", subject: "Chemistry" },
  // Chapter 3: Industrial Chemistry
  { name: "Haber Bosch Reactor", link: "/grade12Chemistry/chapter3/1haber_bosch_reactor.html", chapter: "Chapter 3: Industrial Chemistry", subject: "Chemistry" },
  { name: "Contact Process Reactor", link: "/grade12Chemistry/chapter3/2contact_process_reactor.html", chapter: "Chapter 3: Industrial Chemistry", subject: "Chemistry" },
  { name: "Solvay Tower 3D", link: "/grade12Chemistry/chapter3/3solvay_tower_3d.html", chapter: "Chapter 3: Industrial Chemistry", subject: "Chemistry" },
  { name: "Castner Kellner Lab", link: "/grade12Chemistry/chapter3/4castner_kellner_lab.html", chapter: "Chapter 3: Industrial Chemistry", subject: "Chemistry" },
  // Chapter 4: Polymers & Materials
  { name: "Polymer Builder 3D", link: "/grade12Chemistry/chapter4/1polymer_builder_3d.html", chapter: "Chapter 4: Polymers & Materials", subject: "Chemistry" },
  { name: "EduTwin Molecular Lab", link: "/grade12Chemistry/chapter4/2edutwin_molecular_lab.html", chapter: "Chapter 4: Polymers & Materials", subject: "Chemistry" },
  { name: "Greenhouse Vibrations 3D", link: "/grade12Chemistry/chapter4/3greenhouse_vibrations_3d.html", chapter: "Chapter 4: Polymers & Materials", subject: "Chemistry" },
  { name: "Crystal Lattice Systems", link: "/grade12Chemistry/chapter4/4crystal-lattice-systems.html", chapter: "Chapter 4: Polymers & Materials", subject: "Chemistry" },
  { name: "Protein Folding", link: "/grade12Chemistry/chapter4/5. Protein Folding .html", chapter: "Chapter 4: Polymers & Materials", subject: "Chemistry" },
  // Chapter 5: Green Chemistry & Atom Economy
  { name: "Protein Ribbon Visualizer", link: "/grade12Chemistry/chapter5/1Protein Ribbon Visualizer.html", chapter: "Chapter 5: Green Chemistry", subject: "Chemistry" },
  { name: "Atom Economy", link: "/grade12Chemistry/chapter5/2atom-economy.html", chapter: "Chapter 5: Green Chemistry", subject: "Chemistry" },
];

// Combine all lessons, assigning proper grades
const allLessons: Item[] = [
  ...grade9Lessons.map(item => ({ ...item, grade: 9 as Grade })),
  ...grade12ChemistryLessons.map(item => ({ ...item, grade: 12 as Grade })),
  // Grade 10 and 11 remain empty for now (no lessons)
  // Biology can be added later with grade 9-12 as needed
];

// ================= MAIN APP =================
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<Grade>(9);
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'All'>('All');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('eduTwin_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (name: string) => {
    const updated = favorites.includes(name)
      ? favorites.filter(f => f !== name)
      : [...favorites, name];
    setFavorites(updated);
    localStorage.setItem('eduTwin_bookmarks', JSON.stringify(updated));
  };

  // Filtering logic
  const filteredItems = allLessons.filter(item => {
    if (item.grade !== selectedGrade) return false;
    if (selectedSubject !== 'All' && item.subject !== selectedSubject) return false;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (showOnlyFavorites && !favorites.includes(item.name)) return false;
    return true;
  });

  const visibleChapters = Array.from(
    new Set(filteredItems.map(i => `${i.subject} – ${i.chapter}`))
  );

  const gradeOptions: Grade[] = [9, 10, 11, 12];
  const subjectOptions: (Subject | 'All')[] = ['All', 'Mathematics', 'Chemistry', 'Physics', 'Biology'];

  const getSubjectCount = (subject: Subject | 'All') => {
    if (subject === 'All') return allLessons.filter(l => l.grade === selectedGrade).length;
    return allLessons.filter(l => l.grade === selectedGrade && l.subject === subject).length;
  };

  const hasAnyContent = filteredItems.length > 0;

  return (
    <div className="container">
      <header className="glass-header">
        <h1 className="main-title">📘 EduTwin Visualizer • Grade & Subject Labs</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="🔍 Search lessons (e.g., 'pH', 'Galvanic')..."
            className="search-bar"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="grade-tabs">
            {gradeOptions.map(grade => (
              <button
                key={grade}
                className={`grade-btn ${selectedGrade === grade ? 'active' : ''}`}
                onClick={() => setSelectedGrade(grade)}
              >
                Grade {grade}
              </button>
            ))}
          </div>
          <div className="subject-tabs">
            {subjectOptions.map(subj => (
              <button
                key={subj}
                className={`subject-btn ${selectedSubject === subj ? 'active' : ''}`}
                onClick={() => setSelectedSubject(subj)}
              >
                {subj}
                {selectedGrade === 9 && subj !== 'All' && getSubjectCount(subj) > 0 && (
                  <span className="subject-count"> ({getSubjectCount(subj)})</span>
                )}
                {selectedGrade === 12 && subj === 'Chemistry' && getSubjectCount(subj) > 0 && (
                  <span className="subject-count"> ({getSubjectCount(subj)})</span>
                )}
              </button>
            ))}
          </div>
          <label className="favorite-filter">
            <input
              type="checkbox"
              checked={showOnlyFavorites}
              onChange={e => setShowOnlyFavorites(e.target.checked)}
            />
            ⭐ Show favorites only
          </label>
        </div>
        <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#3b6e9e' }}>
          {selectedGrade === 9 && (
            <span>✅ Grade 9 • {getSubjectCount('All')} interactive simulations (Mathematics, Chemistry, Physics) — Biology coming soon</span>
          )}
          {selectedGrade === 12 && (
            <span>🧪 Grade 12 • {getSubjectCount('All')} Chemistry simulations (Acid-Base, Electrochemistry, Industrial Chemistry, Polymers, Green Chemistry)</span>
          )}
          {(selectedGrade === 10 || selectedGrade === 11) && (
            <span>📌 Grade {selectedGrade} content — coming soon. Explore Grade 9 or Grade 12 for available labs.</span>
          )}
        </div>
      </header>

      <main className="content">
        {!hasAnyContent && selectedGrade === 9 && (
          <div className="empty-state">
            <p>🔍 No lessons match your search, subject, or favorites filter.</p>
            <p>Try adjusting keywords or turning off 'favorites only'.</p>
          </div>
        )}

        {!hasAnyContent && selectedGrade === 12 && (
          <div className="empty-state">
            <p>🧪 <strong>Grade 12 Chemistry</strong></p>
            <p>No lessons match your current filters. Try clearing search or showing all subjects.</p>
          </div>
        )}

        {!hasAnyContent && (selectedGrade === 10 || selectedGrade === 11) && (
          <div className="empty-state">
            <p>📚 <strong>Grade {selectedGrade} Content</strong></p>
            <p>✨ This grade is under development. New visualizations coming soon! ✨</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.75rem' }}>
              ⭐ Meanwhile, switch to <strong>Grade 9</strong> or <strong>Grade 12</strong> to access available labs.
            </p>
          </div>
        )}

        {hasAnyContent && (
          <>
            {visibleChapters.map(title => (
              <Section
                key={title}
                title={title}
                items={filteredItems.filter(i => `${i.subject} – ${i.chapter}` === title)}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))}
            <div style={{ marginTop: '1rem', textAlign: 'right', fontSize: '0.75rem', color: '#5d7f9e' }}>
              {filteredItems.length} lesson{filteredItems.length !== 1 ? 's' : ''} displayed
            </div>
          </>
        )}

        {/* Biology placeholder for Grade 9/12 if selected but no content yet */}
        {selectedSubject === 'Biology' && hasAnyContent === false && (selectedGrade === 9 || selectedGrade === 12) && (
          <div className="empty-state" style={{ marginTop: '1rem' }}>
            <p>🧬 <strong>Biology content is being prepared</strong></p>
            <p>Interactive biology visualizations will appear here soon.</p>
          </div>
        )}
      </main>

      <footer>
        🧪 EduTwin – Interactive STEM visualizations • Grade 9 (Math, Chem, Physics) • Grade 12 Chemistry (full) • Biology & Grades 10-11 in progress
      </footer>
    </div>
  );
};

export default App;