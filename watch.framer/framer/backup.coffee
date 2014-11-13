# This imports all the layers for "watch1" into watch1Layers2
watch1Layers2 = Framer.Importer.load "imported/watch1"


# Welcome to Framer

# Learn how to prototype: http://framerjs.com/learn
# Drop an image on the device, or import a design from Sketch or Photoshop
for layerGroupName of watch1Layers2
  window[layerGroupName] = watch1Layers2[layerGroupName]

for layerGroupName of watch1Layers2
  watch1Layers2[layerGroupName].originalFrame = window[layerGroupName].frame


Layer2.opacity = 0
Layer2.x += 345
Layer1.x -= 7
Layer3.opacity = 0
Layer3.x += 345
OptionLayer.x -= 6
OptionLayer.y += 379
Layer4.opacity = 0
Layer4.x +=345
Layer5.opacity = 0
Layer5.x += 345
LastLayer.y -= 379


eta.on Events.Click, ->
	Utils.delay .2, ->
		Layer2.animate
					properties:
						x: Layer2.originalFrame.x-8
		Layer1.animate
			properties:	
				x: Layer1.originalFrame.x - 345
	Layer2.animate
		properties:
			opacity: 1
	Layer1.animate
		properties:	
			opacity: 0


			
etaLayer2.on Events.Click, ->
	Utils.delay .2, ->
		Layer3.animate
					properties:
						x: Layer3.originalFrame.x-6
		Layer2.animate
			properties:	
				x: Layer2.originalFrame.x - 345
	Layer3.animate
		properties:
			opacity: 1
	Layer2.animate
		properties:	
			opacity: 0

etaSteps.on Events.Click, ->
	OptionLayer.animate
		properties:
			y: optionsMenu.originalFrame.y + 110


optionsMenu.on Events.Click, ->
	optionsMenu.animate
		properties:
			opacity: 0
	Layer3.animate
		properties:
			opacity: 1
	etaMin.animate
		properties:
			opacity: 0
	Utils.delay 3, ->
		Layer3.animate
			properties:	
				x: Layer4.originalFrame.x - 400
		Layer4.animate
			properties:	
				x: Layer4.originalFrame.x
		Layer4.animate
			properties:	
				opacity: 1
		


etaLayer4.on Events.Click, ->
	Utils.delay .2, ->
		Layer5.animate
					properties:
						x: Layer5.originalFrame.x-6
		Layer4.animate
			properties:	
				x: Layer4.originalFrame.x - 345
	Layer5.animate
		properties:
			opacity: 1
	Layer4.animate
		properties:	
			opacity: 0

etaStepsCopy.on Events.Click, ->
	Utils.delay .2, ->
		LastLayer.animate
					properties:
						y: LastLayer.originalFrame.y
		Layer5.animate
			properties:	
				x: Layer5.originalFrame.x - 345
	LastLayer.animate
		properties:
			opacity: 1
	Layer5.animate
		properties:	
			opacity: 0 


		

			
			
			
			
			
