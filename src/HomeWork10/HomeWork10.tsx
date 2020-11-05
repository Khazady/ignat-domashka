import React from "react";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../app/store";
import {Preloader} from "../components/common/Preloader/Preloader";
import {loadingAC} from "./loadingReducer";

export function HomeWork10() {
    const dispatch = useDispatch();

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
      <div>
          {loading
            ? <Preloader/>
            : <Button onClick={setLoading}>set loading...</Button>
          }
      </div>
    );
}
