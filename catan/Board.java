import java.util.*;
import static java.lang.Math.*;

public class Board {
    private List<HexTile> board = new ArrayList<>();
    private List<Integer> values = new ArrayList<>(
            Arrays.asList(5, 2, 6, 3, 8, 10, 9, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11));
    private List<Integer> resources = new ArrayList<>(
            Arrays.asList(1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5));
    // 1: wood, 2: sheep, 3:wheat, 4:brick, 5:ore, 0: desert

    public Board() {
        Collections.shuffle(resources);
        int n = 0;

        // sets desert
        Random rand = new Random();
        int index = rand.nextInt(values.size() + 1);
        values.add(index, 0);
        resources.add(index, 0);

        for (int q = -2; q <= 2; q++) {

            for (int r = -2; r <= 2; r++) {
                int s = -q - r;
                if (abs(s) <= 2) {
                    int value = values.get(n);
                    int resource = resources.get(n);
                    board.add(new HexTile(resource, value, q, r, s));
                    n++;
                }

            }
        }
    }

    public List<HexTile> getBoard() {
        return board;
    }
}
