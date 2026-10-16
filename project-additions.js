/* Global project-card polish shared by all portfolio projects. */
(() => {
  const styles = document.createElement('style');
  styles.id = 'portfolio-project-card-uniformity';
  styles.textContent = `
    /* Case-study tags continue the native tag design. */
    .tag-variant-uiux[data-v-5556fafc] {
      background-color:#d9e8df; color:#245649; border:1px solid #9fc5b3;
    }
    .tag-variant-figma[data-v-5556fafc] {
      background-color:#e8def4; color:#523873; border:1px solid #b7a2d0;
    }

    /* All native project cards have equal-height grid tracks and imagery. */
    .projects-cards[data-v-3bf82988] {
      grid-auto-rows:1fr;
      align-items:stretch;
    }
    .projects-cards[data-v-3bf82988] > .preview-card[data-v-03144b76] {
      box-sizing:border-box;
      display:flex;
      flex-direction:column;
      height:100%;
      min-width:0;
    }
    .projects-cards .preview-card-top[data-v-03144b76] {
      aspect-ratio:16 / 9;
      width:100%;
      flex-shrink:0;
    }
    .projects-cards .preview-card-image-container[data-v-03144b76],
    .projects-cards .preview-card-image-wrapper[data-v-03144b76] {
      aspect-ratio:16 / 9;
      width:100%;
    }
    .projects-cards .preview-card-image[data-v-03144b76] {
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
    }
    .projects-cards .preview-card-content[data-v-03144b76] {
      flex:1 1 auto;
      min-width:0;
    }
    .projects-cards .preview-card-title[data-v-03144b76] {
      line-height:1.2;
    }
    .projects-cards .preview-card-description[data-v-03144b76] {
      line-height:1.45;
      min-height:4.35em;
      display:-webkit-box;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:3;
      overflow:hidden;
    }
    @media (max-width:639px) {
      .projects-cards[data-v-3bf82988] {grid-auto-rows:auto;}
      .projects-cards[data-v-3bf82988] > .preview-card[data-v-03144b76] {
        height:auto;
      }
    }
  `;
  document.head.appendChild(styles);
})();
