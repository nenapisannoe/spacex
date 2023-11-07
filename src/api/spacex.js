class SpaceX{

    constructor(baseUrl = "https://api.spacexdata.com/v4/") {
        this.baseUrl = baseUrl;
    }
    launches(){
        return fetch(`${this.baseUrl}launches`)
            .then(response=>response.json())
    }
    launchpads(){
        return fetch(`${this.baseUrl}launchpads`)
            .then(response=>response.json())
    }
    launchpad(id){
        return fetch(`${this.baseUrl}launchpads/${id}`)
            .then(response=>response.json())

    }

    launchpadToGeoJSON(launchpad){
        return { "type": "Feature", 
             "geometry": {"type": "Point", "coordinates": [launchpad.longitude, launchpad.latitude]},
             "properties": {"name": launchpad.name},
             "id": launchpad.id
           }
    }

}

export {SpaceX}
