const Soup = require('@stews/soup');
const aepl = require('aepl');
const OUT = new Soup(Object);
const util = require('util');


class Reflection {
    constructor(settings, baseSettings) {
        Object.assign(this, baseSettings);
        util.inherits(this.constructor, baseSettings.constructor);
        
        this.defaultMode = this.__getSetting("m_DefaultReflectionMode", settings);
        this.defaultResolution = this.__getSetting("m_DefaultReflectionResolution", settings);

        this.bounces = this.__getSetting("m_ReflectionBounces", settings);
        this.intensity = this.__getSetting("m_ReflectionIntensity", settings);

        let texture = this.__getSetting("m_CustomReflection", settings, { keepAsString: true});
        this.texture = parseInt(texture.substring(9, texture.length-1));
    }
}


OUT.push("Reflection", aepl.init("Reflection", Reflection));
module.exports = OUT.pour();
