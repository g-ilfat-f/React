import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NAME } from "../store/profile/chatActions";

const Profile = () => {
    const name = useSelector(state => state.profile);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch({ type: CHANGE_NAME, payload: value })
    }, [dispatch, value]);

    return (
        <div>
            <h4>Profile</h4>
            <input
                type='text'
                value={value}
                onChange={handleChange}
            />
            <Button onClick={setName}>Изменить имя</Button>
        </div>
    );
};

export default Profile;