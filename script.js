const leftLayoutBtn = document.querySelector('.layout-navigation__item.left');
const rightLayoutBtn = document.querySelector('.layout-navigation__item.right');
const bothLayoutBtn = document.querySelector('.layout-navigation__item.both');

const leftColumn = document.querySelector('.layout-template__item:nth-child(1)');
const rightColumn = document.querySelector('.layout-template__item:nth-child(2)');

leftLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(leftColumn, rightColumn);
});

rightLayoutBtn.addEventListener('click', () => {
    createAsymmetricColumns(rightColumn, leftColumn);
});

bothLayoutBtn.addEventListener('click', () => {
    rightColumn.style.flexBasis = '50%';
    rightColumn.querySelector('img').style.width = '100%';
    rightColumn.querySelector('img').style.display = 'block';
    leftColumn.style.flexBasis = '50%';
    leftColumn.querySelector('img').style.display = 'block';
    leftColumn.querySelector('img').style.width = '100%';
});

const createAsymmetricColumns = (wideColumnEl, narrowColumnEl) => {
    wideColumnEl.style.flexBasis = '95%';
    wideColumnEl.querySelector('img').style.width = '75%';
    wideColumnEl.querySelector('img').style.display = 'block';
    narrowColumnEl.style.flexBasis = '5%';
    narrowColumnEl.querySelector('img').style.display = 'none';
};