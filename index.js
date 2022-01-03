const navigation = document.getElementById('navigation');

document.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('navigation-toggle') ||
    e.target.classList.contains('navigation-toggle-img')
  ) {
    navigation.classList.toggle('navigation-hide');
  } else {
    navigation.classList.add('navigation-hide');
  }
});
