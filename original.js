function optimalRoute(stops, startAddress, endAddress) {

    // 1. Access the Maps object
    var df = Maps.newDirectionFinder();

    // 2. Set the starting and ending addresses
    df.setOrigin(String(startAddress));
    df.setDestination(String(endAddress));

    // 3. More settings...
    df.setMode(Maps.DirectionFinder.Mode.DRIVING);
    df.setOptimizeWaypoints(true);

    // 4. Adding addresses to the route
    for(var i=0; i < stops.length; i++) {
        var addr = stops[i][0];
        if(addr.length>0) {
            df.addWaypoint(addr);
        }
    }

    // 5. Compute optimal route
    var directions = df.getDirections();
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
