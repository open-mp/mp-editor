module.exports = class Bundle {
    constructor(bundleId) {
        let {
            groupId,
            artifactId,
            version,
            classifier
        } = bundleId;
        this.groupId = groupId;
        this.artifactId = artifactId;
        this.version = version;
        this.classifier = classifier;
    }

    getStringId() {
        let preId = `${this.groupId}-${this.artifactId}-${this.version}`;
        if (this.classifier) {
            return preId + '-' + this.classifier
        }
        return preId;
    }

    getQueryObject() {
        return {
            groupId: this.groupId,
            artifactId: this.artifactId,
            version: this.version,
            classifier: this.classifier
        }

    }
}
