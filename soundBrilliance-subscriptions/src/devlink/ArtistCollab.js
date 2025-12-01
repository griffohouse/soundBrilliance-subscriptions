"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ArtistCollab.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-181":{"id":"e-181","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-182"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ebad153e9f2319bd53770c|c3a99bf9-d6aa-acca-1c45-bd3df5a17563","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|c3a99bf9-d6aa-acca-1c45-bd3df5a17563","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693177680359},"e-183":{"id":"e-183","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-184"}},"mediaQueries":["main"],"target":{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693189840006},"e-185":{"id":"e-185","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-186"}},"mediaQueries":["medium"],"target":{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693193610935},"e-187":{"id":"e-187","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-188"}},"mediaQueries":["small"],"target":{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693193645453},"e-189":{"id":"e-189","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-190"}},"mediaQueries":["tiny"],"target":{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693193700986},"e-191":{"id":"e-191","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-192"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb077cf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb077cf","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194498577},"e-193":{"id":"e-193","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-194"}},"mediaQueries":["medium"],"target":{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194498577},"e-195":{"id":"e-195","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-196"}},"mediaQueries":["main"],"target":{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194498577},"e-197":{"id":"e-197","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["small"],"target":{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194498577},"e-199":{"id":"e-199","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["tiny"],"target":{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|3092efdb-bd99-a162-0adc-c6f2afb0780a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194498577},"e-201":{"id":"e-201","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dda7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dda7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194504159},"e-203":{"id":"e-203","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["medium"],"target":{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194504159},"e-205":{"id":"e-205","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main"],"target":{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194504159},"e-207":{"id":"e-207","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-208"}},"mediaQueries":["small"],"target":{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194504159},"e-209":{"id":"e-209","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-210"}},"mediaQueries":["tiny"],"target":{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64ebad153e9f2319bd53770c|f2e20017-81c8-4bb6-2463-7e88db49dde2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693194504159},"e-711":{"id":"e-711","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-712"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"35043b7c-2496-5b37-05a7-c8216807140f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"35043b7c-2496-5b37-05a7-c8216807140f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1710192243333},"e-713":{"id":"e-713","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-714"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"35043b7c-2496-5b37-05a7-c82168071412","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"35043b7c-2496-5b37-05a7-c82168071412","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1710192243333},"e-983":{"id":"e-983","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-984"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a7f5e331-ec3e-9ecc-0015-82c2eedf96f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a7f5e331-ec3e-9ecc-0015-82c2eedf96f8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1725402067203},"e-985":{"id":"e-985","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-986"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a7f5e331-ec3e-9ecc-0015-82c2eedf96fb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a7f5e331-ec3e-9ecc-0015-82c2eedf96fb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1725402067203},"e-987":{"id":"e-987","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-988"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64c81f782e0c08ffc078c444|6a63ce5c-7f1f-3a14-ef88-0e1106edf135","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64c81f782e0c08ffc078c444|6a63ce5c-7f1f-3a14-ef88-0e1106edf135","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1726608191388}},"actionLists":{"a-15":{"id":"a-15","title":"Audio Experience [Open]","actionItemGroups":[{"actionItems":[{"id":"a-15-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":0,"unit":""}},{"id":"a-15-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_close","selectorGuids":["1973d944-c1cc-5d02-cc91-73c7a4fd23a2"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":0,"unit":""}},{"id":"a-15-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|c3a99bf9-d6aa-acca-1c45-bd3df5a17563"},"value":0,"unit":""}},{"id":"a-15-n","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".audio-experience_content","selectorGuids":["44962dd7-b90d-a759-36d5-9878a8a00629"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-15-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|c3a99bf9-d6aa-acca-1c45-bd3df5a17563"},"value":"none"}},{"id":"a-15-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":"none"}},{"id":"a-15-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":800,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":"grid"}},{"id":"a-15-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":800,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_close","selectorGuids":["1973d944-c1cc-5d02-cc91-73c7a4fd23a2"]},"value":"block"}}]},{"actionItems":[{"id":"a-15-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":1,"unit":""}},{"id":"a-15-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_close","selectorGuids":["1973d944-c1cc-5d02-cc91-73c7a4fd23a2"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1693177685830},"a-16":{"id":"a-16","title":"Audio Experience [Close 40%]","actionItemGroups":[{"actionItems":[{"id":"a-16-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":0,"unit":""}},{"id":"a-16-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":0,"unit":""}},{"id":"a-16-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":"none"}},{"id":"a-16-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":"none"}},{"id":"a-16-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".audio-experience_content","selectorGuids":["44962dd7-b90d-a759-36d5-9878a8a00629"]},"widthValue":40,"widthUnit":"%","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-16-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":"block"}},{"id":"a-16-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":1,"unit":""}},{"id":"a-16-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":"block"}},{"id":"a-16-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693177685830},"a-17":{"id":"a-17","title":"Audio Experience [Close 60%]","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":0,"unit":""}},{"id":"a-17-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":0,"unit":""}},{"id":"a-17-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":"none"}},{"id":"a-17-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":"none"}},{"id":"a-17-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".audio-experience_content","selectorGuids":["44962dd7-b90d-a759-36d5-9878a8a00629"]},"widthValue":60,"widthUnit":"%","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-17-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":"block"}},{"id":"a-17-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":1,"unit":""}},{"id":"a-17-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":"block"}},{"id":"a-17-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693177685830},"a-18":{"id":"a-18","title":"Audio Experience [Close 75%]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":0,"unit":""}},{"id":"a-18-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":0,"unit":""}},{"id":"a-18-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":"none"}},{"id":"a-18-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":"none"}},{"id":"a-18-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".audio-experience_content","selectorGuids":["44962dd7-b90d-a759-36d5-9878a8a00629"]},"widthValue":75,"widthUnit":"%","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-18-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":"block"}},{"id":"a-18-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":1,"unit":""}},{"id":"a-18-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":"block"}},{"id":"a-18-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693177685830},"a-19":{"id":"a-19","title":"Audio Experience [Close]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":0,"unit":""}},{"id":"a-19-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":300,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":0,"unit":""}},{"id":"a-19-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"64ebad153e9f2319bd53770c|1b6e109b-4434-8f42-5191-005b7a8df6dd"},"value":"none"}},{"id":"a-19-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".audio-experience_layout","selectorGuids":["01b875cd-2e63-8cb8-01d3-20b55c7f7986"]},"value":"none"}},{"id":"a-19-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".audio-experience_content","selectorGuids":["44962dd7-b90d-a759-36d5-9878a8a00629"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-19-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":"block"}},{"id":"a-19-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".text-align-center","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7dd"]},"value":1,"unit":""}},{"id":"a-19-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":500,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":"block"}},{"id":"a-19-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"easeInOut","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".button.is-secondary","selectorGuids":["7a430290-1e11-fb0a-7a60-f535b0e8c7ab","7a430290-1e11-fb0a-7a60-f535b0e8c7fe"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1693177685830},"a-6":{"id":"a-6","title":"Fade In [0.1]","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-6-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-6-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-6-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":1000,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690913836286},"a-7":{"id":"a-7","title":"Fade In [0.2]","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":150,"easing":"outExpo","duration":1000,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":150,"easing":"outExpo","duration":1000,"target":{"useEventTarget":true,"id":"64c81f782e0c08ffc078c444|6903ca4d-ecf8-3e5d-0d02-ad4f63dacd49"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690913836286}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ArtistCollab({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section_artist")} tag="div">
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "artist-browser_component")}
        navSpacing={4}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="fade"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={false}
      >
        <_Builtin.SliderMask
          className={_utils.cx(_styles, "artist-browser_mask")}
        >
          <_Builtin.SliderSlide tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "max-width-full")}
              button={false}
              block="inline"
              options={{
                href: "/artists/farewell-milwaukee",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "section_header30")}
                tag="header"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "padding-global")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "container-small")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-align-center")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "header30_content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "padding-section-large"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "header30_layout")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_top")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-xsmall"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-style-pill",
                                      "is-white-border"
                                    )}
                                    tag="div"
                                  >
                                    {"Introducing"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-small"
                                )}
                                tag="div"
                              >
                                <_Builtin.Heading
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  tag="h1"
                                >
                                  {"Artist Collaborations"}
                                </_Builtin.Heading>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_bottom")}
                              tag="div"
                            >
                              <_Builtin.Heading
                                className={_utils.cx(
                                  _styles,
                                  "text-color-white"
                                )}
                                tag="h1"
                              >
                                {"Farewell Milwaukee"}
                              </_Builtin.Heading>
                              <_Builtin.Block
                                className={_utils.cx(_styles, "spacer-medium")}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "display-inlineflex",
                                  "text-size-medium"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "is-pill"
                                  )}
                                  tag="div"
                                >
                                  {"View Artist"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "header30_background-image-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "image-overlay-layer")}
                    tag="div"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header30_background-image")}
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/66d78a3443fe1d4d8a101fba_fm.jpeg"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "max-width-full")}
              button={false}
              block="inline"
              options={{
                href: "/artists/michael-rabb",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "section_header30")}
                tag="header"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "padding-global")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "container-small")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-align-center")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "header30_content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "padding-section-large"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "header30_layout")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_top")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-xsmall"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-style-pill",
                                      "is-white-border"
                                    )}
                                    data-w-id="a7f5e331-ec3e-9ecc-0015-82c2eedf96f8"
                                    tag="div"
                                  >
                                    {"Introducing"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-small"
                                )}
                                tag="div"
                              >
                                <_Builtin.Heading
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  data-w-id="a7f5e331-ec3e-9ecc-0015-82c2eedf96fb"
                                  tag="h1"
                                >
                                  {"Artist Collaborations"}
                                </_Builtin.Heading>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_bottom")}
                              tag="div"
                            >
                              <_Builtin.Heading
                                className={_utils.cx(
                                  _styles,
                                  "text-color-white"
                                )}
                                data-w-id="6a63ce5c-7f1f-3a14-ef88-0e1106edf135"
                                tag="h1"
                              >
                                {"Michael Rabb"}
                              </_Builtin.Heading>
                              <_Builtin.Block
                                className={_utils.cx(_styles, "spacer-medium")}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "display-inlineflex",
                                  "text-size-medium"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "is-pill"
                                  )}
                                  tag="div"
                                >
                                  {"View Artist"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "header30_background-image-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "image-overlay-layer")}
                    tag="div"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header30_background-image")}
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/65ce673974c98433888ed62d_Michael%20Rabb.webp"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "max-width-full")}
              button={false}
              block="inline"
              options={{
                href: "/artists/abilene",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "section_header30")}
                tag="header"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "padding-global")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "container-small")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-align-center")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "header30_content")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "padding-section-large"
                          )}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "header30_layout")}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_top")}
                              tag="div"
                            >
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-xsmall"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  tag="div"
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "text-style-pill",
                                      "is-white-border"
                                    )}
                                    data-w-id="35043b7c-2496-5b37-05a7-c8216807140f"
                                    tag="div"
                                  >
                                    {"Introducing"}
                                  </_Builtin.Block>
                                </_Builtin.Block>
                              </_Builtin.Block>
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "margin-bottom",
                                  "margin-small"
                                )}
                                tag="div"
                              >
                                <_Builtin.Heading
                                  className={_utils.cx(
                                    _styles,
                                    "text-color-white"
                                  )}
                                  data-w-id="35043b7c-2496-5b37-05a7-c82168071412"
                                  tag="h1"
                                >
                                  {"Artist Collaborations"}
                                </_Builtin.Heading>
                              </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                              className={_utils.cx(_styles, "header30_bottom")}
                              tag="div"
                            >
                              <_Builtin.Image
                                loading="lazy"
                                width="auto"
                                height="auto"
                                alt=""
                                src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/653abfcaecfc62d2b470bc38_logo.webp"
                              />
                              <_Builtin.Block
                                className={_utils.cx(_styles, "spacer-medium")}
                                tag="div"
                              />
                              <_Builtin.Block
                                className={_utils.cx(
                                  _styles,
                                  "display-inlineflex",
                                  "text-size-medium"
                                )}
                                tag="div"
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "button",
                                    "is-pill"
                                  )}
                                  tag="div"
                                >
                                  {"View Artist"}
                                </_Builtin.Block>
                              </_Builtin.Block>
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "header30_background-image-wrapper"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "image-overlay-layer")}
                    tag="div"
                  />
                  <_Builtin.Image
                    className={_utils.cx(_styles, "header30_background-image")}
                    loading="eager"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/64c81f782e0c08ffc078c373/653abc98c0ee60ce6cb93a60_abilene.webp"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow dir="left">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow dir="right">
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav
          className={_utils.cx(_styles, "artist-browser_slide-nav")}
        />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
