# Guide de Design Woodoo Studio

Ce guide explique comment recréer l'esthétique "Woodoo Studio" section par section. Le design repose sur un thème sombre profond, des typographies massives, des micro-interactions fluides et une utilisation subtile de la transparence (Glassmorphism).

## 1. Les Fondations (Configuration)

Tout commence par la configuration de Tailwind CSS. Le design utilise une palette de couleurs personnalisée et une police spécifique.

### Couleurs & Typographie
Ajoutez ces configurations dans votre `tailwind.config.js` (ou script de config) :

```javascript
colors: {
  woodoo: {
    950: '#050505', // Fond principal (presque noir)
    900: '#0a0a0a', // Fond secondaire (cartes)
    accent: '#6366f1', // Indigo 500 (Accents vibrants)
  }
},
fontFamily: {
  sans: ['Manrope', 'sans-serif'], // Police moderne et géométrique
  serif: ['Playfair Display', 'serif'], // Pour les touches élégantes (optionnel)
}
```

### Utilitaires CSS (Glassmorphism)
L'effet de verre est crucial. Ajoutez cette classe dans votre CSS global :

```css
.glass-card {
  background: rgba(23, 23, 23, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
```

---

## 2. Section Hero (L'Impact Visuel)

La section Hero doit être immersive. Elle utilise trois couches :
1.  **Fond** : Image texturée sombre + Gradient pour fondre les bords.
2.  **Lumière** : Une "tache" de lumière floue (`blur-3xl`) pour donner de la profondeur.
3.  **Contenu** : Typographie massive et éléments interactifs.

### Structure du Code (Simplifiée)

```tsx
<section className="relative min-h-[80vh] overflow-hidden flex flex-col justify-center">
  
  {/* 1. Arrière-plan Parallaxe/Fixe */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-[url('/texture.jpg')] opacity-20 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-woodoo-950 via-transparent to-woodoo-950"></div>
  </div>

  {/* 2. Effet de Lumière (Glow) */}
  <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-woodoo-accent/10 blur-3xl opacity-40 rounded-full mix-blend-screen pointer-events-none"></div>

  {/* 3. Contenu */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">
    <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.9]">
      Nous créons de la <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-woodoo-accent to-white italic">
        Magie.
      </span>
    </h1>
  </div>
</section>
```

**Clés du design :**
*   `leading-[0.9]` : Resserre l'interlignage pour les gros titres.
*   `bg-clip-text` : Permet de mettre un dégradé *dans* le texte.
*   `mix-blend-overlay` : Fond l'image avec la couleur de fond pour un rendu subtil.

---

## 3. Cartes Projets (Bento Grid)

Les cartes utilisent un effet de "révélation" au survol.

### Composant Carte

```tsx
<div className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 h-[400px]">
  
  {/* Image de fond (Zoom au survol) */}
  <img 
    src={image} 
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
  />
  
  {/* Gradient pour lisibilité du texte */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

  {/* Contenu (Slide up au survol) */}
  <div className="absolute inset-0 p-8 flex flex-col justify-end">
    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      
      {/* Catégorie (Apparaît au survol) */}
      <p className="text-woodoo-accent text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Web Design
      </p>
      
      <h3 className="text-3xl font-medium text-white mb-2">Projet Alpha</h3>
      
      {/* Lien (S'agrandit au survol) */}
      <div className="h-0 group-hover:h-8 transition-all duration-300 overflow-hidden">
        <span className="text-sm text-neutral-300">Voir le projet →</span>
      </div>
    </div>
  </div>
</div>
```

**Clés du design :**
*   `group` sur le parent et `group-hover:` sur les enfants permet de tout animer quand on survole la carte.
*   `duration-700` sur l'image pour un effet "cinématique" lent, et `duration-300` sur le texte pour la réactivité.

---

## 4. Navigation (Glassmorphism)

La barre de navigation doit flotter et flouter le contenu qui passe dessous.

```tsx
<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-woodoo-950/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <div className="font-bold text-xl tracking-tighter">WOODOO</div>
    <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
      Contact
    </button>
  </div>
</nav>
```

**Clés du design :**
*   `bg-woodoo-950/80` : Couleur de fond avec 80% d'opacité.
*   `backdrop-blur-md` : Applique le flou à ce qui est *derrière* la nav.

---

## 5. Logique & State Management

Au-delà du visuel, l'expérience utilisateur repose sur une gestion fine de l'état (State). Voici comment fonctionnent les composants clés.

### Navigation (Détection du Scroll)
La barre de navigation change d'apparence quand on scrolle.

```tsx
const Navigation = () => {
  // 1. État pour savoir si on a scrollé
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si on dépasse 50px, on active le mode "scrolled"
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Nettoyage de l'écouteur à la destruction du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed ... transition-all duration-500 ${
      scrolled ? 'py-4 bg-black/80' : 'py-8 bg-transparent'
    }`}>
      {/* ... */}
    </nav>
  );
};
```
*   **Logique** : On écoute l'événement `scroll` de la fenêtre. Si `window.scrollY > 50`, on change l'état.
*   **Rendu** : La classe CSS change dynamiquement (`py-4` vs `py-8`) avec une `transition-all` pour animer le changement.

### Animations au Scroll (Intersection Observer)
Pour que les éléments apparaissent quand on les voit (comme dans `Studio.tsx`), on utilise l'API `IntersectionObserver`.

```tsx
const Studio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Si l'élément est visible à 15% dans l'écran
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // On arrête d'observer une fois vu
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div ref={sectionRef} className={`transform transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Contenu */}
    </div>
  );
};
```
*   **Logique** : On "observe" la section. Dès qu'elle entre dans l'écran, `isVisible` passe à `true`.
*   **Rendu** : On passe de `opacity-0` (invisible) à `opacity-100` (visible) avec un léger mouvement vers le haut (`translate-y`).

### Magic Concierge (Appels API & Loading)
Pour l'interaction avec l'IA, on gère trois états : l'entrée utilisateur, le chargement, et le résultat.

```tsx
const MagicConcierge = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleMagic = async () => {
    if (!prompt) return;
    setLoading(true); // 1. Début du chargement (affiche spinner)
    
    try {
      const response = await apiCall(prompt); // 2. Appel asynchrone
      setResult(response); // 3. Succès
    } catch (e) {
      // Gestion d'erreur
    } finally {
      setLoading(false); // 4. Fin du chargement
    }
  };

  // ... Rendu conditionnel basé sur 'loading' et 'result'
};
```

## Résumé des principes
1.  **Noir n'est pas Noir** : Utilisez `#050505` ou `#0a0a0a`, jamais `#000000` pur pour éviter un contraste trop dur.
2.  **Espace** : Laissez beaucoup d'espace (`p-8`, `gap-6`) pour que le design respire.
3.  **Mouvement** : Tout doit bouger légèrement (hover, scroll, apparition).
4.  **Réactivité** : Le design réagit aux actions de l'utilisateur (scroll, survol, input) grâce aux `useState` et `useEffect`.
