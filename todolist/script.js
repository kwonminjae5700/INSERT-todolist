// 오늘의 날짜를 출력하기 위한 코드
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = document.getElementById('today')
const date = new Date()

const week_index = date.getDay()
const day = date.getDate()
const month_index = date.getMonth()

today.innerText = `${week[week_index]}, ${day} ${month[month_index]}`

const insert = document.getElementById('insert_button')

let count = 0

 insert.addEventListener('click', () => {
    // 일정 추가 코드
    let todo = prompt("오늘 할 일을 입력해주세요!")

    if(!todo.length) alert('공백은 입력이 불가합니다!')
    else {
        const text = document.createElement('div')
        const div = document.querySelector('#text_box')
    
        text.innerHTML = 
            `
                <div class="todo_list">
                    <div class="finish_checkBox"></div>
                    <img src="./check.png" width="44px" height="34px"/>
                    <h1 id="modify">${todo}</h1>
                    <button class="success">Success</button>
                    <button class="delete">Delete</div>
                </div>
                <div class="underbar"/>
            `
    
        div.appendChild(text)

        // 일정 성공 코드
        const successButton = text.querySelector('.success')

        successButton.addEventListener('click', () => {
            alert('계획 성공을 축하드립니다! 남은 계획들도 화이팅!!')
            const todoList = text.querySelector('.todo_list')

            const finishCheckBox = todoList.querySelector('.finish_checkBox')
            const checkImg = todoList.querySelector('img[src="./check.png"]')

            finishCheckBox.style.opacity = 0
            checkImg.style.opacity = 1
            
        })

        // 일정 삭제 코드
        const deleteButton = text.querySelector('.delete')

        deleteButton.addEventListener('click', () => {
            text.remove()

            count -= 1
            const task = document.getElementById('tasks_h2')
            task.innerText = `${count} tasks`
        })
        

        // 일정 수정 코드
        const modify = text.querySelector('#modify')

        modify.addEventListener('click', () => {
            const modify_text = prompt('계획을 어떻게 수정하실건가요?')

            modify.innerText = `${modify_text}`
        })

        // 일정 추가했을 때 1씩 추가하는 코드
        count+=1
        const task = document.getElementById('tasks_h2')
    
        task.innerText = `${count} tasks`
    }
 })