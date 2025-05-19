from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in react_dashboard/__init__.py
from react_dashboard import __version__ as version

setup(
	name="react_dashboard",
	version=version,
	description="This app is for React dashboard",
	author="Self",
	author_email="anything@gmail.co",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
