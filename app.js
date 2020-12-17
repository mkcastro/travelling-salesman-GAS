function optimalRoute(stops, startAddress, endAddress) {
    // 1. Access the Maps object
    const directionFinder = Maps.newDirectionFinder();

    // 2. Set the starting and ending addresses
    directionFinder.setOrigin(String(startAddress));
    directionFinder.setDestination(String(endAddress));

    // 3. More settings...
    directionFinder.setMode(Maps.DirectionFinder.Mode.DRIVING);
    directionFinder.setOptimizeWaypoints(true);

    // 4. Adding addresses to the route
    for (var i = 0; i < stops.length; i++) {
        let address = stops[i][0];
        if (address.length > 0) {
            directionFinder.addWaypoint(address);
        }
    }

    // 5. Compute optimal route
    var directions = directionFinder.getDirections();
    var stops_order = directions.routes[0].waypoint_order;

    // 6. Assign the stop position to each address
    var stop_sequence = [["Stop #"]];
    for (j = 0; j < stops_order.length; j++) {
        var stop = stops_order.indexOf(j) + 1;
        stop_sequence.push([stop]);
    }

    // 7. Return the result
    return stop_sequence;
}
