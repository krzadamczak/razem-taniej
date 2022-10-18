import React from "react";
import Input from "../Input/Input";
/*TODO: Pomyśleć jakie ustawienia powinny się tutaj znaleźć*/
const ProfileUserInfo = () => {
    return (
        <div className='profile__main'>
            <Input label='Imię'></Input>
            <Input label='Nazwisko'></Input>
            <Input type='date' label='Data urodzenia'></Input>
        </div>
    );
};

export default ProfileUserInfo;
