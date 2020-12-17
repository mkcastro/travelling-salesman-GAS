function optimal_route(stops, startAddress, endAddress) {
    // 1. Access the Maps object
    const directionFinder = Maps.newDirectionFinder();

    // 2. Set the starting and ending addresses
    directionFinder.setOrigin(String(startAddress));
    directionFinder.setDestination(String(endAddress));

    // 3. More settings...
    directionFinder.setMode(Maps.DirectionFinder.Mode.DRIVING);
    directionFinder.setOptimizeWaypoints(true);

    // 4. Adding addresses to the route
    stops.forEach((stop) => {
        let address = stop[0];
        if (address.length > 0) {
            directionFinder.addWaypoint(address);
        }
    });

    // 5. Compute optimal route
    const directions = directionFinder.getDirections();
    const stopsOrder = directions.routes[0].waypoint_order;

    // 6. Assign the stop position to each address
    const stopSequence = [["Stop #"]];
    stopsOrder.forEach(stop => {
        stopSequence.push([stop + 1]);
    });

    // 7. Return the result
    return stopSequence;
}
