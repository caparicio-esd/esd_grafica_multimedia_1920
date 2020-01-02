

const nav = document.querySelector('nav');
const subCh = nav.querySelectorAll('.has_children');

subCh.forEach(subCh_item => {
    subCh_item.addEventListener('mouseenter', () => {
        subCh_item.querySelector('ul').style.display = 'block';
    });
    subCh_item.addEventListener('mouseleave', () => {
        subCh_item.querySelector('ul').style.display = '';
    });
});
