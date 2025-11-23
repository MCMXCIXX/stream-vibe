import getAttrNameFromSelector from "@/untils/getAttrNameFromSelector.js";

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(element.getAttribute(getAttrNameFromSelector()));
}

export default getParams;