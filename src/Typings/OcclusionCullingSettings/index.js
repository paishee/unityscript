const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);

class OcclusionCullingSettings {
    constructor(settings) {
        let fixedSettings = this.extend(this.parent.BaseType, settings);
        this.extend(this.parent.BaseSettings, fixedSettings);
        this.occlusionBakeSettings = new this.parent.OcclusionBakeSettings(fixedSettings.occlusionBakeSettings);
    }
}


OUT.push("OcclusionCullingSettings", aepl.init("OcclusionCullingSettings", OcclusionCullingSettings));
module.exports = OUT.pour();
