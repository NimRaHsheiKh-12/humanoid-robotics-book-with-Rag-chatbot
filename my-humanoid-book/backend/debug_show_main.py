import inspect
import main
print('MAIN FILE:', main.__file__)
source = inspect.getsource(main)
print('\n'.join(source.splitlines()[:40]))
