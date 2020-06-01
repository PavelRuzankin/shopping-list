import {
  STATE_PRE_LIST,
  STATE_COMP_LIST,
  STATE_LISTS,
  RESTART_VALUES,
} from "./actionTypes";

export function checkSimilarProducts(name, list) {
  let id = null;
  list.forEach((elem, index) => {
    if (elem.name === name) {
      id = index;
    }
  });

  return id;
}

export function addToPreList(name, count) {
  return (dispatch, getState) => {
    const preList = getState().lists.preList;
    const findID = checkSimilarProducts(name, preList);
    if (findID !== null) {
      preList[findID].count = preList[findID].count + count;
      debugger;
    } else {
      preList.push({ name, count });
    }

    dispatch({
      type: STATE_PRE_LIST,
      preList,
    });
    dispatch({ type: RESTART_VALUES });
  };
}

export function relocateProduct(n) {
  return (dispatch, getState) => {
    const compList = getState().lists.compList;
    compList.push(getState().lists.preList[n]);
    dispatch({
      type: STATE_COMP_LIST,
      compList,
    });

    const preList = getState().lists.preList;
    preList.splice(n, 1);
    dispatch({
      type: STATE_PRE_LIST,
      preList,
    });
  };
}

export function deleteProduct(nameList, id) {
  return (dispatch, getState) => {
    const lists = getState().lists;
    const list = lists[nameList];

    list.splice(id, 1);
    lists[nameList] = list;
    dispatch({ type: STATE_LISTS, lists });
  };
}
