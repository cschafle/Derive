// This is autogenerated by Framer Studio


// Generated by CoffeeScript 1.8.0
(function() {
  var lookupLine, properties, _RESULT,
    __slice = [].slice;

  if (window.FramerStudio == null) {
    window.FramerStudio = {};
  }

  window.onerror = null;

  window.midiCommand = window.midiCommand || function() {};

  if (Framer.Device) {
    properties = ["deviceScale", "contentScale", "deviceType", "keyboard", "orientation", "fullScreen"];
    properties.map(function(propertyName) {
      return Framer.Device.on("change:" + propertyName, function() {
        return window._bridge("device:change");
      });
    });
  }

  _RESULT = null;

  lookupLine = function(lineNumber) {
    var char, charIndex, errorColNumber, errorLine, errorLineIndex, errorLineNumber, loc, sourceLines, _i, _len;
    sourceLines = _RESULT.js.split("\n");
    errorLineIndex = lineNumber - 1;
    errorLine = sourceLines[errorLineIndex];
    if (!errorLine) {
      return lineNumber;
    }
    errorLineNumber = 1;
    errorColNumber = 0;
    for (charIndex = _i = 0, _len = errorLine.length; _i < _len; charIndex = ++_i) {
      char = errorLine[charIndex];
      loc = _RESULT.sourceMap.sourceLocation([errorLineIndex, charIndex]);
      if (loc && loc[0] > errorLineNumber) {
        errorLineNumber = loc[0] + 1;
        errorColNumber = loc[1];
      }
    }
    console.log("lineNumber", lineNumber);
    console.log("errorLineNumber", errorLineNumber);
    return errorLineNumber;
  };

  FramerStudio.compile = function(code) {
    var e, err, errorMessage;
    console.log("FramerStudio.compile");
    window.onerror = null;
    window.onresize = null;
    try {
      _RESULT = CoffeeScript.compile(code, {
        sourceMap: true,
        filename: "generated.js"
      });
    } catch (_error) {
      e = _error;
      console.log("Compile error:", e);
      if (e instanceof SyntaxError) {
        errorMessage = e.stack;
        err = new SyntaxError(e.message);
        err.line = e.location.first_line;
        err.lineNumber = e.location.first_line;
        err.lookup = true;
        window._bridge("StudioError", {
          message: e.message,
          line: e.location.first_line,
          lineNumber: e.location.first_line,
          errorType: "compile"
        });
        throw err;
      } else {
        throw e;
      }
    }
    window.onerror = function(errorMsg, url, lineNumber) {
      var error;
      console.log.apply(console, ["Eval error:"].concat(__slice.call(arguments)));
      error = new Error(errorMsg);
      error.line = lookupLine(lineNumber);
      window._bridge("StudioError", {
        message: errorMsg,
        line: error.line,
        lineNumber: error.line,
        errorType: "eval"
      });
      throw error;
    };
    return _RESULT.js;
  };

  if (typeof window._bridge === "function") {
    window._bridge("StudioScriptLoaded");
  }

}).call(this);

window.__imported__ = window.__imported__ || {};
window.__imported__["optionspage/layers.json.js"] = [
	{
		"id": 29,
		"name": "Layer 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 1371,
			"height": 2423
		},
		"maskFrame": null,
		"image": {
			"path": "images/Layer 1.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 1336,
				"height": 2393
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "158605146"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["titlepage/layers.json.js"] = [
	{
		"id": 116,
		"name": "Background",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/Background.png",
			"frame": {
				"x": 3,
				"y": 106,
				"width": 636,
				"height": 878
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "33754589"
	},
	{
		"id": 745,
		"name": "Photo",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/Photo.png",
			"frame": {
				"x": 0,
				"y": 8,
				"width": 283,
				"height": 1128
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 744,
				"name": "photo",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/photo.png",
					"frame": {
						"x": 0,
						"y": 0,
						"width": 640,
						"height": 1136
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1509772051"
			}
		],
		"modification": "498354828"
	},
	{
		"id": 626,
		"name": "MainUserDirections",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/MainUserDirections.png",
			"frame": {
				"x": 24,
				"y": 155,
				"width": 590,
				"height": 86
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 619,
				"name": "Group4",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/Group4.png",
					"frame": {
						"x": 3,
						"y": 272,
						"width": 637,
						"height": 642
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 623,
						"name": "<Group>-5",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>-5.png",
							"frame": {
								"x": 179,
								"y": 535,
								"width": 28,
								"height": 6
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1035397445"
					},
					{
						"id": 615,
						"name": "<Group>-3",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>-3.png",
							"frame": {
								"x": 169,
								"y": 422,
								"width": 211,
								"height": 50
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1314984575"
					},
					{
						"id": 611,
						"name": "<Group>-2",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>-2.png",
							"frame": {
								"x": 374,
								"y": 422,
								"width": 60,
								"height": 316
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "488670795"
					}
				],
				"modification": "1243903138"
			},
			{
				"id": 606,
				"name": "<Group>",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/<Group>.png",
					"frame": {
						"x": 512,
						"y": 581,
						"width": 38,
						"height": 142
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "958747199"
			}
		],
		"modification": "159218028"
	},
	{
		"id": 426,
		"name": "Direction1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": null,
		"imageType": null,
		"children": [
			{
				"id": 587,
				"name": "ConfirmDriftDestination",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/ConfirmDriftDestination.png",
					"frame": {
						"x": 167,
						"y": 884,
						"width": 305,
						"height": 55
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "747871336"
			},
			{
				"id": 514,
				"name": "CheckBoxes",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": null,
				"imageType": null,
				"children": [
					{
						"id": 444,
						"name": "SnapeBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/SnapeBox.png",
							"frame": {
								"x": 95,
								"y": 427,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7180983"
					},
					{
						"id": 456,
						"name": "TouristyBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/TouristyBox.png",
							"frame": {
								"x": 294,
								"y": 351,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7180986"
					},
					{
						"id": 438,
						"name": "MarcoBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/MarcoBox.png",
							"frame": {
								"x": 93,
								"y": 351,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181011"
					},
					{
						"id": 450,
						"name": "ScenicBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/ScenicBox.png",
							"frame": {
								"x": 292,
								"y": 313,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181015"
					},
					{
						"id": 466,
						"name": "AdventureBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/AdventureBox.png",
							"frame": {
								"x": 293,
								"y": 467,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1385241674"
					},
					{
						"id": 463,
						"name": "RoadLessTraveledBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/RoadLessTraveledBox.png",
							"frame": {
								"x": 293,
								"y": 424,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181043"
					},
					{
						"id": 459,
						"name": "SightSmellBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/SightSmellBox.png",
							"frame": {
								"x": 291,
								"y": 388,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181047"
					},
					{
						"id": 435,
						"name": "DrifterBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/DrifterBox.png",
							"frame": {
								"x": 93,
								"y": 314,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181071"
					},
					{
						"id": 441,
						"name": "AshBox",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/AshBox.png",
							"frame": {
								"x": 93,
								"y": 385,
								"width": 17,
								"height": 18
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7181075"
					}
				],
				"modification": "1763352595"
			},
			{
				"id": 567,
				"name": "DestinationScreen",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/DestinationScreen.png",
					"frame": {
						"x": 29,
						"y": 142,
						"width": 583,
						"height": 812
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 575,
						"name": "RoadLessTraveledRoute",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/RoadLessTraveledRoute.png",
							"frame": {
								"x": 322,
								"y": 429,
								"width": 200,
								"height": 15
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1385239754"
					},
					{
						"id": 573,
						"name": "AdventureRoute",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/AdventureRoute.png",
							"frame": {
								"x": 324,
								"y": 468,
								"width": 201,
								"height": 19
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7925662"
					},
					{
						"id": 585,
						"name": "AshFriend",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/AshFriend.png",
							"frame": {
								"x": 123,
								"y": 389,
								"width": 115,
								"height": 15
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "7955637"
					},
					{
						"id": 583,
						"name": "SnapeFriend",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/SnapeFriend.png",
							"frame": {
								"x": 123,
								"y": 430,
								"width": 127,
								"height": 19
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "8044983"
					},
					{
						"id": 571,
						"name": "MarcoFriend",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/MarcoFriend.png",
							"frame": {
								"x": 124,
								"y": 355,
								"width": 97,
								"height": 15
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "8134328"
					},
					{
						"id": 569,
						"name": "DrifterFriend",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/DrifterFriend.png",
							"frame": {
								"x": 124,
								"y": 317,
								"width": 87,
								"height": 15
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1385187859"
					},
					{
						"id": 581,
						"name": "ScenicRoute",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/ScenicRoute.png",
							"frame": {
								"x": 323,
								"y": 317,
								"width": 157,
								"height": 15
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "8938649"
					},
					{
						"id": 579,
						"name": "TouristyRoute",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/TouristyRoute.png",
							"frame": {
								"x": 322,
								"y": 352,
								"width": 70,
								"height": 19
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "9027993"
					},
					{
						"id": 577,
						"name": "OdorRoute",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/OdorRoute.png",
							"frame": {
								"x": 323,
								"y": 389,
								"width": 135,
								"height": 19
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "9742948"
					},
					{
						"id": 589,
						"name": "Time",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/Time.png",
							"frame": {
								"x": 65,
								"y": 528,
								"width": 282,
								"height": 50
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1766565582"
					}
				],
				"modification": "11017871"
			}
		],
		"modification": "1259398199"
	},
	{
		"id": 333,
		"name": "SelectFinalDest",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/SelectFinalDest.png",
			"frame": {
				"x": 13,
				"y": 132,
				"width": 572,
				"height": 831
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 393,
				"name": "SelectedBrewed",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/SelectedBrewed.png",
					"frame": {
						"x": 117,
						"y": 222,
						"width": 179,
						"height": 178
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1462324740"
			},
			{
				"id": 364,
				"name": "DestinationOptionsGroup",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/DestinationOptionsGroup.png",
					"frame": {
						"x": 115,
						"y": 222,
						"width": 411,
						"height": 649
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 395,
						"name": "ClickBrewed",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/ClickBrewed.png",
							"frame": {
								"x": 117,
								"y": 222,
								"width": 178,
								"height": 179
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1340429005"
					}
				],
				"modification": "932922091"
			},
			{
				"id": 390,
				"name": "BrewedInfo2",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/BrewedInfo2.png",
					"frame": {
						"x": 0,
						"y": 38,
						"width": 640,
						"height": 1098
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 397,
						"name": "backBtn",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/backBtn.png",
							"frame": {
								"x": 61,
								"y": 198,
								"width": 74,
								"height": 28
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1835599526"
					}
				],
				"modification": "1654486634"
			},
			{
				"id": 332,
				"name": "ConfirmDestination",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/ConfirmDestination.png",
					"frame": {
						"x": 204,
						"y": 892,
						"width": 237,
						"height": 53
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "375553651"
			}
		],
		"modification": "1927294892"
	},
	{
		"id": 197,
		"name": "FoodCategories",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/FoodCategories.png",
			"frame": {
				"x": 13,
				"y": 159,
				"width": 576,
				"height": 893
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 198,
				"name": "cafeClick",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/cafeClick.png",
					"frame": {
						"x": 150,
						"y": 272,
						"width": 342,
						"height": 113
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2077746760"
			}
		],
		"modification": "830188009"
	},
	{
		"id": 82,
		"name": "OptionsGroup",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/OptionsGroup.png",
			"frame": {
				"x": 8,
				"y": 160,
				"width": 562,
				"height": 957
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 143,
				"name": "cafe",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/cafe.png",
					"frame": {
						"x": 74,
						"y": 372,
						"width": 471,
						"height": 593
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2079444750"
			},
			{
				"id": 180,
				"name": "moreOptions",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/moreOptions.png",
					"frame": {
						"x": 373,
						"y": 626,
						"width": 109,
						"height": 109
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2079444747"
			}
		],
		"modification": "1076664684"
	},
	{
		"id": 22,
		"name": "Home",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/Home.png",
			"frame": {
				"x": 115,
				"y": 166,
				"width": 416,
				"height": 43
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 61,
				"name": "Curious",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/Curious.png",
					"frame": {
						"x": 57,
						"y": 875,
						"width": 404,
						"height": 44
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 91,
						"name": "NotCurious",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/NotCurious.png",
							"frame": {
								"x": 475,
								"y": 866,
								"width": 118,
								"height": 63
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1471093084"
					},
					{
						"id": 114,
						"name": "CuriousYes",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 640,
							"height": 1136
						},
						"maskFrame": null,
						"image": {
							"path": "images/CuriousYes.png",
							"frame": {
								"x": 475,
								"y": 866,
								"width": 118,
								"height": 63
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "887389391"
					}
				],
				"modification": "172312897"
			},
			{
				"id": 752,
				"name": "InitialPhoto",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/InitialPhoto.png",
					"frame": {
						"x": 123,
						"y": 250,
						"width": 404,
						"height": 404
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2081441024"
			},
			{
				"id": 44,
				"name": "setDestinationGroup",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/setDestinationGroup.png",
					"frame": {
						"x": 101,
						"y": 702,
						"width": 448,
						"height": 97
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1545881822"
			},
			{
				"id": 702,
				"name": "finalPhoto",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/finalPhoto.png",
					"frame": {
						"x": 124,
						"y": 251,
						"width": 403,
						"height": 404
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "2080576902"
			}
		],
		"modification": "417876265"
	},
	{
		"id": 58,
		"name": "HeaderFooter",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/HeaderFooter.png",
			"frame": {
				"x": 1,
				"y": 0,
				"width": 639,
				"height": 1131
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 399,
				"name": "homeBackBtn",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 640,
					"height": 1136
				},
				"maskFrame": null,
				"image": {
					"path": "images/homeBackBtn.png",
					"frame": {
						"x": 17,
						"y": 33,
						"width": 127,
						"height": 46
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1698785399"
			}
		],
		"modification": "283878483"
	},
	{
		"id": 596,
		"name": "timeSelection",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 640,
			"height": 1136
		},
		"maskFrame": null,
		"image": {
			"path": "images/timeSelection.png",
			"frame": {
				"x": 2,
				"y": 497,
				"width": 638,
				"height": 633
			}
		},
		"imageType": "png",
		"children": [
			
		],
		"modification": "270675580"
	}
]
window.__imported__ = window.__imported__ || {};
window.__imported__["directionsWatch/layers.json.js"] = [
	{
		"id": 51,
		"name": "Dtwo",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 329,
			"height": 377
		},
		"maskFrame": null,
		"image": {
			"path": "images/Dtwo.png",
			"frame": {
				"x": 0,
				"y": 0,
				"width": 329,
				"height": 96
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 50,
				"name": "<Group>-8",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 329,
					"height": 377
				},
				"maskFrame": null,
				"image": {
					"path": "images/<Group>-8.png",
					"frame": {
						"x": 13,
						"y": 323,
						"width": 305,
						"height": 39
					}
				},
				"imageType": "png",
				"children": [
					
				],
				"modification": "1990076238"
			},
			{
				"id": 46,
				"name": "<Group>-7",
				"layerFrame": {
					"x": 0,
					"y": 0,
					"width": 329,
					"height": 377
				},
				"maskFrame": null,
				"image": {
					"path": "images/<Group>-7.png",
					"frame": {
						"x": 96,
						"y": 97,
						"width": 31,
						"height": 28
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 43,
						"name": "<Group>-6",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 329,
							"height": 377
						},
						"maskFrame": null,
						"image": null,
						"imageType": null,
						"children": [
							{
								"id": 42,
								"name": "<Group>-5",
								"layerFrame": {
									"x": 0,
									"y": 0,
									"width": 329,
									"height": 377
								},
								"maskFrame": null,
								"image": {
									"path": "images/<Group>-5.png",
									"frame": {
										"x": 105,
										"y": 97,
										"width": 51,
										"height": 217
									}
								},
								"imageType": "png",
								"children": [
									
								],
								"modification": "863235726"
							},
							{
								"id": 38,
								"name": "<Group>-4",
								"layerFrame": {
									"x": 0,
									"y": 0,
									"width": 329,
									"height": 377
								},
								"maskFrame": null,
								"image": {
									"path": "images/<Group>-4.png",
									"frame": {
										"x": 149,
										"y": 277,
										"width": 180,
										"height": 37
									}
								},
								"imageType": "png",
								"children": [
									
								],
								"modification": "260733509"
							},
							{
								"id": 34,
								"name": "<Clip Group>-3",
								"layerFrame": {
									"x": 0,
									"y": 94,
									"width": 332,
									"height": 262
								},
								"maskFrame": {
									"x": 1,
									"y": 96,
									"width": 329,
									"height": 259
								},
								"image": {
									"path": "images/<Clip Group>-3.png",
									"frame": {
										"x": 1,
										"y": 95,
										"width": 328,
										"height": 260
									}
								},
								"imageType": "png",
								"children": [
									
								],
								"modification": "802134921"
							}
						],
						"modification": "940567451"
					}
				],
				"modification": "1104915646"
			}
		],
		"modification": "1779624523"
	},
	{
		"id": 25,
		"name": "Layer 1",
		"layerFrame": {
			"x": 0,
			"y": 0,
			"width": 329,
			"height": 377
		},
		"maskFrame": null,
		"image": {
			"path": "images/Layer 1.png",
			"frame": {
				"x": 11,
				"y": 324,
				"width": 309,
				"height": 41
			}
		},
		"imageType": "png",
		"children": [
			{
				"id": 21,
				"name": "<Clip Group>-2",
				"layerFrame": {
					"x": -3,
					"y": -1,
					"width": 334,
					"height": 379
				},
				"maskFrame": {
					"x": -2,
					"y": 0,
					"width": 331,
					"height": 377
				},
				"image": {
					"path": "images/<Clip Group>-2.png",
					"frame": {
						"x": 0,
						"y": 0,
						"width": 329,
						"height": 238
					}
				},
				"imageType": "png",
				"children": [
					{
						"id": 17,
						"name": "<Group>-3",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 329,
							"height": 377
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>-3.png",
							"frame": {
								"x": 80,
								"y": 210,
								"width": 24,
								"height": 28
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1846596719"
					},
					{
						"id": 12,
						"name": "<Group>-2",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 329,
							"height": 377
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>-2.png",
							"frame": {
								"x": 96,
								"y": 216,
								"width": 22,
								"height": 71
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "1045501489"
					},
					{
						"id": 8,
						"name": "<Group>",
						"layerFrame": {
							"x": 0,
							"y": 0,
							"width": 329,
							"height": 377
						},
						"maskFrame": null,
						"image": {
							"path": "images/<Group>.png",
							"frame": {
								"x": 110,
								"y": 218,
								"width": 210,
								"height": 71
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "523587938"
					},
					{
						"id": 4,
						"name": "<Clip Group>",
						"layerFrame": {
							"x": -4,
							"y": 72,
							"width": 335,
							"height": 531
						},
						"maskFrame": {
							"x": -2,
							"y": 74,
							"width": 331,
							"height": 528
						},
						"image": {
							"path": "images/<Clip Group>.png",
							"frame": {
								"x": 0,
								"y": 73,
								"width": 329,
								"height": 304
							}
						},
						"imageType": "png",
						"children": [
							
						],
						"modification": "803147626"
					}
				],
				"modification": "2045521107"
			}
		],
		"modification": "178400321"
	}
]
window.Framer.Defaults.DeviceView = {
  "deviceScale" : -1,
  "orientation" : 0,
  "contentScale" : 1,
  "deviceType" : "iphone-5c-pink"
};

window.FramerStudioInfo = {
  "deviceImagesUrl" : "file:\/\/\/home\/cc\/cs160\/fa14\/class\/cs160-av\/Downloads\/Framer%20Studio.app\/Contents\/Resources\/DeviceImages\/"
};

Framer.Device = new Framer.DeviceView();
Framer.Device.setupContext();