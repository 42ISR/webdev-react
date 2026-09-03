const App = () => {
    const username = 'ktkv419'

    const handleMinus = () => {

    }

    const handlePlus = () => {

    }

    return (
        <>
            <h1>С подключением, {username}</h1>
            <div>
                <button onClick={handleMinus}>-</button>
                <span>0</span>
                <button onClick={handlePlus}>+</button>
            </div>
        </>
    )
}

export default App
