# This imports all the layers for "titlepage" into titlepageLayers
titlepageLayers = Framer.Importer.load "imported/titlepage"

for layerGroupName of titlepageLayers
  window[layerGroupName] = titlepageLayers[layerGroupName]

for layerGroupName of titlepageLayers
  titlepageLayers[layerGroupName].originalFrame = window[layerGroupName].frame



#Hide all screens :)		
OptionsGroup.x += 640
FoodCategories.x += 640
SelectFinalDest.x += 640
BrewedInfo2.opacity = 0
SelectedBrewed.opacity = 0
Direction1.x += 640
timeSelection.opacity = 0
MainUserDirections.x += 640
Photo.opacity = 0

#annoying check boxes
#CheckBoxes.opacity = 0

curious = false

setDestinationGroup.on Events.Click, ->
	if curious is false
		return
	Home.animate
		properties:			
			x: Home.originalFrame.x - 640
	OptionsGroup.animate
		properties:
			x: OptionsGroup.originalFrame.x

CuriousYes.on Events.Click, ->
	curious = false
	CuriousYes.animate
		properties:
			opacity: 0
			time: 0.2
			delay: 0.4
	NotCurious.
	NotCurious.animate
		properties:
			opacity: 1
			time: 0.2
			delay: 0.4
			
#this is backwards and changes it to curious
NotCurious.on Events.Click, ->
	curious = true
	NotCurious.animate
		properties:
			opacity: 0
			time: 0.2
			delay: 0.4			
	NotCurious.destroy()


moreOptions.on Events.Click, ->
		OptionsGroup.animate
			properties:
				x: OptionsGroup.x - 640
		FoodCategories.animate
			properties:
				x: FoodCategories.originalFrame.x

cafeClick.on Events.Click, ->
	FoodCategories.animate
		properties:
			x: FoodCategories.x - 640
	SelectFinalDest.animate
				properties:
					x: SelectFinalDest.originalFrame.x

ClickBrewed.on Events.Click, ->
	DestinationOptionsGroup.animate
		properties:
				opacity:0
	BrewedInfo2.animate
		properties:
				opacity:1
				
				
backBtn.on Events.Click, ->
	BrewedInfo2.animate
		properties:
				opacity:0
	SelectedBrewed.animate
		properties:
			opacity:1
	DestinationOptionsGroup.animate
		properties:
				opacity:1

ConfirmDestination.on Events.Click, ->
	SelectFinalDest.animate
		properties:
			x:SelectFinalDest.originalFrame.x - 640
	Direction1.animate
			properties:
				x: Direction1.originalFrame.x


#Check boxes clicked or not
SnapeFriend.on Events.Click, ->
	SnapeBox.animate
		properties:
			opacity:0


MarcoFriend.on Events.Click, ->
	MarcoBox.animate
		properties:
			opacity:0


AshFriend.on Events.Click, ->
	AshBox.animate
		properties:
			opacity:0	
		
DrifterFriend.on Events.Click, ->
	DrifterBox.animate
		properties:
			opacity:0


OdorRoute.on Events.Click, ->
	SightSmellBox.animate
		properties:
			opacity:0		
				
TouristyRoute.on Events.Click, ->
	TouristyBox.animate
		properties:
			opacity:0


ScenicRoute.on Events.Click, ->
	ScenicBox.animate
		properties:
			opacity:0				
				
AdventureRoute.on Events.Click, ->
	AdventureBox.animate
		properties:
			opacity:0
			
RoadLessTraveledRoute.on Events.Click, ->
	RoadLessTraveledBox.animate
		properties:
			opacity:0


#Set time
Time.on Events.Click, ->
	timeSelection.animate
		properties:
			opacity:1

homeBackBtn.on Events.Click, ->
	timeSelection.animate
		properties:
			opacity:0

ConfirmDriftDestination.on Events.Click, ->
	Direction1.animate
		properties:
			x:SelectFinalDest.originalFrame.x - 640
	MainUserDirections.animate
		properties:
			x:MainUserDirections.originalFrame.x

#click photo
Group4.on Events.Click, ->
	MainUserDirections.animate
		properties:
			opacity: 0
	Photo.animate
		properties:
			opacity:1
	HeaderFooter.animate
		properties:
			opacity:0
	Utils.delay 3, ->
		HeaderFooter.animate
			properties:
				opacity:1
		Home.animate
			properties:			
				x: Home.originalFrame.x
		Photo.destroy()
		InitialPhoto.animate
			properties:			
				opacity:0
			






