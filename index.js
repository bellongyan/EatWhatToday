function showMenu(mealType) {
    var time = null;
    if (mealType == 'breakfast') time = "早上";
    else if (mealType == "lunch") time = "中午";
    else if (mealType == "dinner") time = "晚上"
    fetch(`data/${mealType}.txt`)
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const randomIndex = Math.floor(Math.random() * (lines.length - 1));
            const randomMeal = lines[randomIndex];
            document.querySelector('label').innerText = `${time}吃${randomMeal}`;
        })
        .catch(error => {
            console.error(`无法获取${mealType}菜单：${error.message}`);
        });
}
