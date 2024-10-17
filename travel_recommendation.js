// Search functionality
function search() {
  const input = document.getElementById('searchInput').value;
  if (input) {
    alert(`Searching for: ${input}`);
  } else {
    alert('Please enter a destination or keyword.');
  }
}

// Clear the search input
function clearSearch() {
  document.getElementById('searchInput').value = '';
}
