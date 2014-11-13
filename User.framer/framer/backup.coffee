# This imports all the layers for "slideScreen" into slidescreenLayers
slidescreenLayers = Framer.Importer.load "imported/slideScreen"

for layerGroupName of slidescreenLayers
  window[layerGroupName] = slidescreenLayers[layerGroupName]

for layerGroupName of slidescreenLayers
  slidescreenLayers[layerGroupName].originalFrame = window[layerGroupName].frame
  
 
Layer2.x += 640
acceptance.opacity = 0

Slider.on Events.Click, ->
	Utils.delay 2, ->
		Layer2.animate
			properties:	
				x: Layer2.originalFrame.x
		Utils.delay 1, ->
			home.animate
				properties:
					opacity:0
	Layer2.animate
		properties:
			opacity: 1
	Layer1.animate
		properties:	
			opacity: 0

AttendJourney.on Events.Click, ->
	invitation.animate
		properties:
			opacity: 0
	AttendJourney.animate
		properties:
			opacity: 0
	photo.animate
		properties:	
				y: Layer2.originalFrame.y
	acceptance.animate
		properties:
			opacity: 1






