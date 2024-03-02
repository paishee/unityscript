const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);


class Scene {
    constructor() {

    }

    translate(data, meta) {
        let stuff = data.split("--- !u");
        stuff.shift();

        stuff = stuff.map( s => {
            s = s.split(/(\r\n|\n|\r)/gm);
            s.shift();
            s = s.filter( thing => !(thing == "\r\n") );
            return s;
        });

        this.occlusionCullingSettings = this.createSettingChild('OcclusionCullingSettings', stuff);
        this.renderSettings = this.createSettingChild('RenderSettings', stuff);
        this.lightmapSettings = this.createSettingChild('LightmapSettings', stuff);
        this.navMeshSettings = this.createSettingChild('NavMeshSettings', stuff);

        stuff.shift(); stuff.shift(); stuff.shift(); stuff.shift();
    }

    createSettingChild(setting, settings) {
        let thing = settings.filter( s => s[0].includes(setting))[0];
        return new this.parent[setting](thing);
    }
}


OUT.push("Scene", aepl.init("Scene", Scene));
module.exports = OUT.pour();
