const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Tilemap
	];
};
self.C3_JsPropNameTable = [
	{a62a4cf5d1ce3a818d865abc89351425afe90c3c: 0},
	{Sprite: 0},
	{Mosaico: 0}
];

self.InstanceType = {
	a62a4cf5d1ce3a818d865abc89351425afe90c3c: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Mosaico: class extends self.ITilemapInstance {}
}