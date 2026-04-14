const searchInput = document.querySelector('[data-search-input]');

if (searchInput) {
  const cards = Array.from(document.querySelectorAll('[data-search-card]'));

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
      const text = (card.dataset.searchText || card.textContent || '').toLowerCase();
      const matched = query.length === 0 || text.includes(query);
      card.style.display = matched ? '' : 'none';
    });
  };

  searchInput.addEventListener('input', applyFilter);
}

const toolSearchInput = document.querySelector('[data-tool-search]');

if (toolSearchInput) {
  const toolItems = Array.from(document.querySelectorAll('[data-tool-item]'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter-btn]'));
  const countEl = document.querySelector('[data-tool-count]');
  let activeFilter = 'all';

  const applyToolFilter = () => {
    const query = toolSearchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    toolItems.forEach((item) => {
      const category = (item.dataset.toolCategory || '').toLowerCase();
      const text = (item.dataset.toolText || item.textContent || '').toLowerCase();
      const matchedCategory = activeFilter === 'all' || category === activeFilter;
      const matchedText = query.length === 0 || text.includes(query);
      const matched = matchedCategory && matchedText;

      item.style.display = matched ? '' : 'none';
      if (matched) {
        visibleCount += 1;
      }
    });

    if (countEl) {
      countEl.textContent = String(visibleCount);
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      applyToolFilter();
    });
  });

  toolSearchInput.addEventListener('input', applyToolFilter);
  applyToolFilter();
}
