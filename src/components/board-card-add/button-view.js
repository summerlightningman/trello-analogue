const ButtonView = ({swapAddMode}) => {
    return (<div className="board-card card-add card-button" onClick={swapAddMode}>
        <h3>Add new board</h3>
    </div>)
};

export default ButtonView;