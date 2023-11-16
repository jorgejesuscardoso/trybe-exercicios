/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_FAILED = 'REQUEST_FAILED';


function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  }
}

export function fetchDogImage() {
  return async (dispacth: Dispatch<AnyAction>) => {
    try {
      dispacth(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispacth(requestSuccessful(data.message));
    } catch (er: any) {
      dispacth(requestFailed(er.message))
    }
  }
}

