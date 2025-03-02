public class HexTile {
    private Integer resource;
    private Integer value;
    private Integer q;
    private Integer r;
    private Integer s;

    public HexTile(Integer resource, Integer value, Integer q, Integer r, Integer s) {
        this.resource = resource;
        this.value = value;
        this.q = q;
        this.r = r;
        this.s = s;
        // System.out.println(y);
    }

    @Override
    public String toString() {
        return String.format("{Resource:%d, Value:%d, q:%d, r:%d, s:%d},", resource, value, q, r, s);
    }
}
