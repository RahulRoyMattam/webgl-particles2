var UVMapper = function(renderer) {
    var _renderer = renderer;

    var _camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );   // not really used
    var _scene  = new THREE.Scene();
    _scene.overrideMaterial = createShaderMaterial(UVMapShader);

    this.renderMap = function(mesh, target) {
        // might need to make geo, so don't steal from its original parent
        _scene.add(mesh);
        _renderer.render(_scene, _camera, target);
        _scene.remove(mesh);
    };

    this.getMap = function(mesh, size) {
        var target = new THREE.WebGLRenderTarget(size, size, {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            depthBuffer: false,
            stencilBuffer: false
        });
        target.generateMipmaps = false;

        this.renderMap(mesh, target);

        return target;
    };
};