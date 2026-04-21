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
  { name: "Set Membership Bubble", link: "/grade9/maths/chapter1/Set_Theory_The_Sorting_Machine.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  // { name: "Set Description Slider", link: "/grade9/maths/chapter1/Set_Theory_Studio_Verbal_Listing_Set_Builder.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Empty Set Visualizer", link: "/grade9/maths/chapter1/3empty_set_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Finite vs Infinite Sets", link: "/grade9/maths/chapter1/4.finite_infinite_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Venn Diagram Lab", link: "/grade9/maths/chapter1/5.venn_diagram_lab.html.htm", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Subset Nesting Lab", link: "/grade9/maths/chapter1/6.subset_nesting_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Set Complement Visualizer", link: "/grade9/maths/chapter1/7.set_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Relative Complement", link: "/grade9/maths/chapter1/8.relative_complement_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Symmetric Difference", link: "/grade9/maths/chapter1/9.symmetric_difference_visualizer.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
  { name: "Cartesian Product Lab", link: "/grade9/maths/chapter1/10.cartesian_product_lab.html", chapter: "Chapter 1: Sets", subject: "Mathematics" },
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
  { name: "Systems of Equations 3D", link: "/grade9/maths/chapter3/2.systems_of_equations_3d_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Absolute Value Tent", link: "/grade9/maths/chapter3/3.absolute_value_tent_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name: "Quadratic Water Lab", link: "/grade9/maths/chapter3/4.quadratic_water_lab.html", chapter: "Chapter 3: Algebra", subject: "Mathematics" },
  { name:"Exponent Expansion Cube", link:"/grade9/maths/chapter3/5.exponent_expansion_cube.html", chapter:"Chapter 3: Algebra", subject:"Mathematics" },
  { name:"Trigonometry Unit Circle", link:"/grade9/maths/chapter4/1.trigonometry_unit_circle_lab.html", chapter:"Chapter 4: Functions & Inequalities", subject:"Mathematics" },
  { name: "Shaded Volume Inequalities", link: "/grade9/maths/chapter4/2.shaded_volume_inequalities_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Quadratic Sign Chart", link: "/grade9/maths/chapter4/3.quadratic_sign_chart_rollercoaster.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Interval Notation Tube", link: "/grade9/maths/chapter4/4.interval_notation_tube_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Budget Boundary Lab", link: "/grade9/maths/chapter4/5.budget_boundary_lab.htmlbudget_boundary_lab.html", chapter: "Chapter 4: Functions & Inequalities", subject: "Mathematics" },
  { name: "Unit Circle Trig Wave Visualizer", link: "/grade9/maths/chapter5/1.UnitCircle_TrigWave_Visualizer.html", chapter: "Chapter 5: Geometry & Measurement", subject: "Mathematics" },
  
 
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
  { name: "Derived Units Builder", link: "/grade9/chemistry/chapter2/ DerivedUnitsArea&Volum Builder .html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Scientific Notation Converter", link: "/grade9/chemistry/chapter2/ScientificNotationConverter .html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Speed & Acceleration Grapher", link: "/grade9/chemistry/chapter2/SpeedandAccelerationGrapher.html", chapter: "Chapter 2", subject: "Chemistry" },
  { name: "Isotopes and Mass Spectrometry", link: "/grade9/chemistry/chapter3/ 9. Isotopes and Mass Spectrometry.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Thomson vs Rutherford Experiment", link: "/grade9/chemistry/chapter3/1. Thomson’s Plum Pudding vs. Rutherford’s Gold Foil.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Bohr Energy Transitions", link: "/grade9/chemistry/chapter3/2. Bohr’s Model Energy Transitions.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "CRT Deflection", link: "/grade9/chemistry/chapter3/3. Cathode Ray Tube (CRT) Deflection.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Heisenberg Uncertainty", link: "/grade9/chemistry/chapter3/4. Heisenberg Uncertainty Principle.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Photoelectric Effect", link: "/grade9/chemistry/chapter3/5. Photoelectric Effect.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "De Broglie Wavelength", link: "/grade9/chemistry/chapter3/7. De Broglie Wavelength (Wave-Particle Duality).html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Emission Spectrum Piano", link: "/grade9/chemistry/chapter3/8. Emission Spectrum Piano.html", chapter: "Chapter 3", subject: "Chemistry" },
  { name: "Pauli Exclusion & Hund’s Rule", link: "/grade9/chemistry/chapter3/10. Pauli Exclusion & Hund’s Rule (Box Diagrams).html", chapter: "Chapter 3", subject: "Chemistry" },
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
  { name: "Definition and Nature of Physics", link: "/grade9/physics/chapter1/Definition_and_Nature_of_Physics.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Figure 3 - Physics Concept", link: "/grade9/physics/chapter1/Physics_Thought_Experiments.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Physics Branch Explorer", link: "/grade9/physics/chapter1/Physics_Branch_Explorer.html", chapter: "Chapter 1: Foundations", subject: "Physics" },
  { name: "Mark Density - Mechanics", link: "/grade9/physics/chapter2/Precision_Lab_Mark_Density.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: " Multi-Device.html", link: "/grade9/physics/chapter2/Precision_Lab_Multi-Device.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Subjective vs Objective", link: "/grade9/physics/chapter2/Measurement_Lab_Subjective_vs_Objective.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Scientific Notation", link: "/grade9/physics/chapter2/Scientific_Notation_Decimal_Slider.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Sig Fig Lab · Uncertainty Filter", link: "/grade9/physics/chapter2/Sig_Fig_Lab_Uncertainty_Filter.html", chapter: "Chapter 2: Mechanics", subject: "Physics" },
  { name: "Figure 4 - Waves", link: "/grade9/physics/chapter3/Motion_Tracer_x_t_Graph.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 1 - Waves", link: "/grade9/physics/chapter3/Motion_Tracer_x_t_Graph.html.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 2 - Waves", link: "/grade9/physics/chapter3/Distance_vs_Displacement_Vector_Lab.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  { name: "Figure 3 - Waves", link: "/grade9/physics/chapter3/Kinematics_Lab_Motion_Explorer.html", chapter: "Chapter 3: Waves & Oscillations", subject: "Physics" },
  
  { name: "Figure 1 - Thermodynamics", link: "/grade9/physics/chapter4/Physics_Suite_Newton's_Laws.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },
  { name: "Figure 2 - Thermodynamics", link: "/grade9/physics/chapter4/Lab_Static_vs_Kinetic.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },
  { name: "Figure 3 - Thermodynamics", link: "/grade9/physics/chapter4/Physics_Lab_Work_Energy_&_Power.html", chapter: "Chapter 4: Thermodynamics", subject: "Physics" },

  { name: "Figure 1 - Electromagnetism", link:"/grade9/physics/chapter5/Physics_Labs_Portal.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 3 - Electromagnetism", link: "/grade9/physics/chapter5/The Sculptable_Ramp_AMA_vs_TMA_Lab.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 4 - Electromagnetism", link: "/grade9/physics/chapter5/The_Industrial_Pulley_Lab.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 6 - Electromagnetism", link: "/grade9/physics/chapter5/The_Slope_Trio_Interactive_Logic_Lab.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },
  { name: "Figure 6 - Electromagnetism", link: "/grade9/physics/chapter5/The_Ultimate_Lever_Lab3_Classes_of_FLE.html", chapter: "Chapter 5: Electricity & Magnetism", subject: "Physics" },

  { name: "Figure 1 - Modern Physics", link: "/grade9/physics/chapter6/Slow_Motion_Wave_Lab.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 2 - Modern Physics", link: "/grade9/physics/chapter6/The_Oscillator_Lab.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 3 - Modern Physics", link: "/grade9/physics/chapter6/ Mechanical_vs_EM_Waves_The_Vacuum_Test.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },
  { name: "Figure 4 - Modern Physics", link: "/grade9/physics/chapter6/Interactive_Sound_Lab_Velocity_&_Echo.html", chapter: "Chapter 6: Modern Physics", subject: "Physics" },

  { name: "Figure 1 - Optics", link: "/grade9/physics/chapter7/ Definitive_Micro_to_Macro.html", chapter: "Chapter 7: Optics & Light", subject: "Physics" },
  { name: "Figure 2 - Optics", link: "/grade9/physics/chapter7/Interactive_Temperature_Lab.html", chapter: "Chapter 7: Optics & Light", subject: "Physics" },
];


// ----- GRADE 11 MATHEMATICS LESSONS -----
const grade11MathLessons: Omit<Item, 'grade'>[] = [
  // Chapter 1: Functions and Graphs
  { name: "Graphs of Power Functions", link: "/grade11/maths/chapter1/1graphs_of_power_functions.html", chapter: "Chapter 1: Functions and Graphs", subject: "Mathematics" },
  { name: "Graph of Modulus Function", link: "/grade11/maths/chapter1/2graph_of_modulus_function.html", chapter: "Chapter 1: Functions and Graphs", subject: "Mathematics" },
  { name: "Graphs of Inverse Relations and Functions", link: "/grade11/maths/chapter1/3graphs_of_inverse_relations_and_functions.html", chapter: "Chapter 1: Functions and Graphs", subject: "Mathematics" },

  // Chapter 2: Rational Functions and Inequalities
  { name: "Graphs of Rational Functions and Asymptotes", link: "/grade11/maths/chapter2/1graphs_of_rational_functions_and_asymptotes.html", chapter: "Chapter 2: Rational Functions and Inequalities", subject: "Mathematics" },
  { name: "Sign Chart for Rational Inequalities", link: "/grade11/maths/chapter2/2sign_chart_for_rational_inequalities.html", chapter: "Chapter 2: Rational Functions and Inequalities", subject: "Mathematics" },
  { name: "Partial Fraction Decomposition Visualization", link: "/grade11/maths/chapter2/3partial_fraction_decomposition_visualization.html", chapter: "Chapter 2: Rational Functions and Inequalities", subject: "Mathematics" },

  // Chapter 3: Matrices
  { name: "Matrix Addition and Subtraction Visualization", link: "/grade11/maths/chapter3/1matrix_addition_and_subtraction_visualization.html", chapter: "Chapter 3: Matrices", subject: "Mathematics" },
  { name: "Matrix Multiplication Visualization", link: "/grade11/maths/chapter3/2matrix_multiplication_visualization.html", chapter: "Chapter 3: Matrices", subject: "Mathematics" },
  { name: "Gaussian Elimination Row Operations Visualization", link: "/grade11/maths/chapter3/3gaussian_elimination_row_operations_visualization.html", chapter: "Chapter 3: Matrices", subject: "Mathematics" },

  // Chapter 4: Determinants and Systems of Equations
  { name: "Determinant of 2x2 Matrix Visualization", link: "/grade11/maths/chapter4/1determinant_of_2x2_matrix_visualization.html", chapter: "Chapter 4: Determinants and Systems of Equations", subject: "Mathematics" },
  { name: "Cofactor Expansion 3x3 Determinant Visualization", link: "/grade11/maths/chapter4/2cofactor_expansion_3x3_determinant_visualization.html", chapter: "Chapter 4: Determinants and Systems of Equations", subject: "Mathematics" },
  { name: "Cramer's Rule Systems 2x2 and 3x3 Visualization", link: "/grade11/maths/chapter4/3cramers_rule_systems_2x2_3x3_visualization.html", chapter: "Chapter 4: Determinants and Systems of Equations", subject: "Mathematics" },

  // Chapter 5: Vectors
  { name: "Vector Addition and Subtraction Visualization", link: "/grade11/maths/chapter5/1vector_addition_and_subtraction_visualization.html", chapter: "Chapter 5: Vectors", subject: "Mathematics" },
  { name: "Dot Product and Angle Between Vectors Visualization", link: "/grade11/maths/chapter5/2dot_product_and_angle_between_vectors_visualization.html", chapter: "Chapter 5: Vectors", subject: "Mathematics" },
  { name: "Cross Product and Parallelogram Area Visualization", link: "/grade11/maths/chapter5/3cross_product_and_parallelogram_area_visualization.html", chapter: "Chapter 5: Vectors", subject: "Mathematics" },

  // Chapter 6: Transformations
  { name: "Translation of Points and Shapes Visualization", link: "/grade11/maths/chapter6/1translation_of_points_and_shapes_visualization.html", chapter: "Chapter 6: Transformations", subject: "Mathematics" },
  { name: "Reflection Across Axes and Lines Visualization", link: "/grade11/maths/chapter6/2reflection_across_axes_and_lines_visualization.html", chapter: "Chapter 6: Transformations", subject: "Mathematics" },
  { name: "Rotation About Origin Visualization", link: "/grade11/maths/chapter6/3rotation_about_origin_visualization.html", chapter: "Chapter 6: Transformations", subject: "Mathematics" },

  // Chapter 7: Statistics
  { name: "Frequency Polygon Visualization", link: "/grade11/maths/chapter7/2frequency_polygon_visualization.html", chapter: "Chapter 7: Statistics", subject: "Mathematics" },

  // Chapter 8: Probability and Combinatorics
  { name: "Tree Diagrams for Counting Fundamental Principle", link: "/grade11/maths/chapter8/1tree_diagrams_for_counting_fundamental_principle.html", chapter: "Chapter 8: Probability and Combinatorics", subject: "Mathematics" },
  { name: "Pascal's Triangle Binomial Theorem Visualization", link: "/grade11/maths/chapter8/2pascals_triangle_binomial_theorem_visualization.html", chapter: "Chapter 8: Probability and Combinatorics", subject: "Mathematics" },
  
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
// ----- GRADE 10 MATHEMATICS LESSONS (new) -----
const grade10MathematicsLessons: Omit<Item, 'grade'>[] = [
  // Chapter 1: Functions & Graphs
  { name: "Cartesian Plotter Touch Lab", link: "/grade10/maths/chapter1/1cartesian_plotter_touch_lab.html", chapter: "Chapter 1: Functions & Graphs", subject: "Mathematics" },
  { name: "Function Machine Tester", link: "/grade10/maths/chapter1/2function_machine_tester.html", chapter: "Chapter 1: Functions & Graphs", subject: "Mathematics" },
  { name: "Parabola Architect Lab", link: "/grade10/maths/chapter1/3parabola_architect_lab.html", chapter: "Chapter 1: Functions & Graphs", subject: "Mathematics" },

  // Chapter 2: Polynomials
  { name: "Polynomial End Behavior Lab", link: "/grade10/maths/chapter2/1polinomiyalend_behavior_lab.html", chapter: "Chapter 2: Polynomials", subject: "Mathematics" },
  { name: "Remainder Machine", link: "/grade10/maths/chapter2/2remainder_machine.html", chapter: "Chapter 2: Polynomials", subject: "Mathematics" },
  { name: "Zero Detective Lab", link: "/grade10/maths/chapter2/3zero_detective_lab.html", chapter: "Chapter 2: Polynomials", subject: "Mathematics" },

  // Chapter 3: Exponentials & Logarithms
  { name: "Exponential Growth Lab", link: "/grade10/maths/chapter3/1exponential_growth_lab.html", chapter: "Chapter 3: Exponentials & Logarithms", subject: "Mathematics" },
  { name: "Logarithm Machine", link: "/grade10/maths/chapter3/2logarithm_machine.html", chapter: "Chapter 3: Exponentials & Logarithms", subject: "Mathematics" },
  { name: "Compound Interest Race", link: "/grade10/maths/chapter3/3compound_interest_race.html", chapter: "Chapter 3: Exponentials & Logarithms", subject: "Mathematics" },

  // Chapter 4: Trigonometry
  { name: "Unit Circle Sine Wave", link: "/grade10/maths/chapter4/1unit_circle_sine_wave.html", chapter: "Chapter 4: Trigonometry", subject: "Mathematics" },
  { name: "Reference Angle Lab", link: "/grade10/maths/chapter4/2reference_angle_lab.html", chapter: "Chapter 4: Trigonometry", subject: "Mathematics" },

  // Chapter 5: Geometry & Circles
  { name: "Inscribed Angle Lab", link: "/grade10/maths/chapter5/1inscribed_angle_lab.html", chapter: "Chapter 5: Geometry & Circles", subject: "Mathematics" },
  { name: "Cyclic Quadrilateral Lab", link: "/grade10/maths/chapter5/2cyclic_quadrilateral_lab.html", chapter: "Chapter 5: Geometry & Circles", subject: "Mathematics" },
  { name: "Sector Builder Lab", link: "/grade10/maths/chapter5/3sector_builder_lab.html", chapter: "Chapter 5: Geometry & Circles", subject: "Mathematics" },
];

// ----- GRADE 12 MATHEMATICS LESSONS -----
const grade12MathematicsLessons: Omit<Item, 'grade'>[] = [
  // Chapter 1: Sequences and Series
  {
    name: "Graphs of Sequences",
    link: "/grade12/maths/chapter1/1graphs_of_sequences.html",
    chapter: "Chapter 1: Sequences and Series",
    subject: "Mathematics"
  },
  {
    name: "Pascal's Triangle Binomial Coefficients",
    link: "/grade12/maths/chapter1/2pascals_triangle_binomial_coefficients.html",
    chapter: "Chapter 1: Sequences and Series",
    subject: "Mathematics"
  },
  {
    name: "Infinite Geometric Series Convergence Visualization",
    link: "/grade12/maths/chapter1/3infinite_geometric_series_convergence_visualization.html",
    chapter: "Chapter 1: Sequences and Series",
    subject: "Mathematics"
  },

  // Chapter 2: Differential Calculus
  {
    name: "Slope of Tangent and Secant Lines Visualization",
    link: "/grade12/maths/chapter2/1slope_tangent_secant_lines_visualization.html",
    chapter: "Chapter 2: Differential Calculus",
    subject: "Mathematics"
  },
  {
    name: "Increasing and Decreasing Functions (Derivative Sign Chart)",
    link: "/grade12/maths/chapter2/2increasing_decreasing_functions_derivative_sign_chart.html",
    chapter: "Chapter 2: Differential Calculus",
    subject: "Mathematics"
  },
  {
    name: "Area Under Curve (Riemann Sums Visualization)",
    link: "/grade12/maths/chapter2/3area_under_curve_riemann_sums_visualization.html",
    chapter: "Chapter 2: Differential Calculus",
    subject: "Mathematics"
  },

  // Chapter 3: Statistics
  {
    name: "Frequency Curves and Skewness Visualization",
    link: "/grade12/maths/chapter3/1frequency_curves_and_skewness_visualization.html",
    chapter: "Chapter 3: Statistics",
    subject: "Mathematics"
  },
  {
    name: "Box and Whisker Plot (Interquartile Range Visualization)",
    link: "/grade12/maths/chapter3/2box_and_whisker_plot_interquartile_range_visualization.html",
    chapter: "Chapter 3: Statistics",
    subject: "Mathematics"
  },

  // Chapter 4: Linear Programming
  {
    name: "Graphical Solution of Linear Inequalities (Two Variables)",
    link: "/grade12/maths/chapter4/1graphical_solution_linear_inequalities_two_variables.html",
    chapter: "Chapter 4: Linear Programming",
    subject: "Mathematics"
  },
  {
    name: "Feasible Region of System of Linear Inequalities",
    link: "/grade12/maths/chapter4/2feasible_region_system_linear_inequalities.html",
    chapter: "Chapter 4: Linear Programming",
    subject: "Mathematics"
  },
 
];
// Combine all lessons, assigning proper grades
const allLessons: Item[] = [
  ...grade9Lessons.map(item => ({ ...item, grade: 9 as Grade })),
  ...grade10MathematicsLessons.map(item => ({ ...item, grade: 10 as Grade })),
  ...grade11MathLessons.map(item => ({ ...item, grade: 11 as Grade })),
   ...grade12MathematicsLessons.map(item => ({ ...item, grade: 12 as Grade })),
  ...grade12ChemistryLessons.map(item => ({ ...item, grade: 12 as Grade })),
  // Grade 11 remains empty for now
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

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;
    if (showOnlyFavorites && !favorites.includes(item.name)) return false;

    return true;
  });

  const visibleChapters = Array.from(
    new Set(filteredItems.map(i => `${i.subject} – ${i.chapter}`))
  );

  const gradeOptions: Grade[] = [9, 10, 11, 12];

  const subjectOptions: (Subject | 'All')[] = [
    'All',
    'Mathematics',
    'Chemistry',
    'Physics',
    'Biology'
  ];

  const getSubjectCount = (subject: Subject | 'All') => {
    if (subject === 'All') {
      return allLessons.filter(l => l.grade === selectedGrade).length;
    }

    return allLessons.filter(
      l => l.grade === selectedGrade && l.subject === subject
    ).length;
  };

  const hasAnyContent = filteredItems.length > 0;

  return (
    <div className="container">
      <header className="glass-header">
        <h1 className="main-title">
          📘 EduTwin Visualizer • Grade & Subject Labs
        </h1>

        <div className="controls">
          <input
            type="text"
            placeholder="🔍 Search lessons..."
            className="search-bar"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          {/* Grade Buttons */}
          <div className="grade-tabs">
            {gradeOptions.map(grade => (
              <button
                key={grade}
                className={`grade-btn ${
                  selectedGrade === grade ? 'active' : ''
                }`}
                onClick={() => setSelectedGrade(grade)}
              >
                Grade {grade}
              </button>
            ))}
          </div>

          {/* Subject Buttons */}
          <div className="subject-tabs">
            {subjectOptions.map(subj => (
              <button
                key={subj}
                className={`subject-btn ${
                  selectedSubject === subj ? 'active' : ''
                }`}
                onClick={() => setSelectedSubject(subj)}
              >
                {subj}

                {subj !== 'All' && getSubjectCount(subj) > 0 && (
                  <span className="subject-count">
                    {' '}
                    ({getSubjectCount(subj)})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Favorites */}
          <label className="favorite-filter">
            <input
              type="checkbox"
              checked={showOnlyFavorites}
              onChange={e =>
                setShowOnlyFavorites(e.target.checked)
              }
            />
            ⭐ Show favorites only
          </label>
        </div>

        {/* Dynamic Grade Description */}
        <div
          style={{
            marginTop: '0.8rem',
            fontSize: '0.85rem',
            color: '#3b6e9e'
          }}
        >
          {selectedGrade === 9 && (
            <span>
              ✅ Grade 9 • {getSubjectCount('All')} interactive simulations
              (Mathematics, Chemistry, Physics)
            </span>
          )}

          {selectedGrade === 10 && (
            <span>
              📐 Grade 10 • {getSubjectCount('All')} Mathematics simulations
              (Functions, Polynomials, Trigonometry, Geometry)
            </span>
          )}

          {selectedGrade === 11 && (
            <span>
              📌 Grade 11 content — coming soon.
            </span>
          )}

          {selectedGrade === 12 && (
            <span>
              🧪 Grade 12 • {getSubjectCount('All')} Chemistry simulations
              (Acid-Base, Electrochemistry, Industrial Chemistry,
              Polymers, Green Chemistry)
            </span>
          )}
        </div>
      </header>

      <main className="content">
        {/* Empty states */}
        {!hasAnyContent && selectedGrade === 9 && (
          <div className="empty-state">
            <p>🔍 No Grade 9 lessons match your filters.</p>
          </div>
        )}

        {!hasAnyContent && selectedGrade === 10 && (
          <div className="empty-state">
            <p>📐 No Grade 10 Mathematics lessons match your filters.</p>
          </div>
        )}

        {!hasAnyContent && selectedGrade === 11 && (
          <div className="empty-state">
            <p>📚 Grade 11 content is under development.</p>
          </div>
        )}

        {!hasAnyContent && selectedGrade === 12 && (
          <div className="empty-state">
            <p>🧪 No Grade 12 Chemistry lessons match your filters.</p>
          </div>
        )}

        {/* Show Lessons */}
        {hasAnyContent && (
          <>
            {visibleChapters.map(title => (
              <Section
                key={title}
                title={title}
                items={filteredItems.filter(
                  i => `${i.subject} – ${i.chapter}` === title
                )}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))}

            <div
              style={{
                marginTop: '1rem',
                textAlign: 'right',
                fontSize: '0.75rem',
                color: '#5d7f9e'
              }}
            >
              {filteredItems.length} lesson
              {filteredItems.length !== 1 ? 's' : ''} displayed
            </div>
          </>
        )}

        {/* Biology Placeholder */}
        {selectedSubject === 'Biology' &&
          !hasAnyContent &&
          (selectedGrade === 9 || selectedGrade === 12) && (
            <div
              className="empty-state"
              style={{ marginTop: '1rem' }}
            >
              <p>
                🧬 <strong>Biology content coming soon</strong>
              </p>
            </div>
          )}
      </main>

      <footer>
        🧪 EduTwin – Interactive STEM Visualizations • Grade 9 • Grade 10
        Mathematics • Grade 12 Chemistry • More coming soon
      </footer>
    </div>
  );
};

export default App;