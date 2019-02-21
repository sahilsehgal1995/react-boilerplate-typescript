import { BehaviorSubject } from "rxjs";
import { createEpicMiddleware, ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { mergeMap, takeUntil } from "rxjs/operators";
import { combineEpics } from "redux-observable";

// Dynamic loading of Epics
export const epic$ = new BehaviorSubject(combineEpics());
const dependencies = { getJSON: ajax.getJSON };

export const epicMiddleWare = createEpicMiddleware({ dependencies });

export const rootEpic = (action$, ...rest) => epic$.pipe(
    mergeMap(epic =>
        epic(action$, ...rest).pipe(
            takeUntil(action$.pipe(
                ofType("EPIC_END"),
            )),
        ),
    ),
);

export const addEpic = (newEpic, newDependencies) => {
    Object.assign(dependencies, newDependencies);
    // merges this new epic into our existing rootEpic above
    epic$.next(newEpic);
};
